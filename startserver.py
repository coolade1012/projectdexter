from pokedex.db import connect, tables, util
import os, os.path
import cherrypy

#cherrypy.config.update({'server.socket_host': '104.236.221.17',
#                        'server.socket_port': 80,
#                       })



class ProjectDexter(object):

    @cherrypy.expose
    def index(self):
        return file('index.html')

class ProjectDexterWebService(object):
    exposed = True
    
    @cherrypy.tools.accept(media='text/plain')
    def GET(self):
        return cherrypy.session['myresult']

    def POST(self, identifier='bulbasaur'):
        identifier = identifier.lower()
        session = connect()
        pokemon = util.get(session, tables.PokemonSpecies, identifier)
        result = u'{0.name}, the {0.genus} Pokemon'.format(pokemon)
#        result =  u'{0.id}\n{0.name}\n{0.genus} Pokemon\n{0.child_species}\n'.format(pokemon)
        cherrypy.session['myresult'] = result
        return result
    
    def PUT(self, another_result):
         cherrypy.session['myresult'] = another_result

    def DELETE(self):
         cherrypy.session.pop('myresult', None)
    
if __name__ == '__main__':
     conf = {
         '/': {
             'tools.sessions.on': True,
             'tools.staticdir.root': os.path.abspath(os.getcwd())
         },
         '/generator': {
             'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
             'tools.response_headers.on': True,
             'tools.response_headers.headers': [('Content-Type', 'text/plain')],
         },
         '/static': {
             'tools.staticdir.on': True,
             'tools.staticdir.dir': './public'
         }
     }
     webapp = ProjectDexter()
     webapp.generator = ProjectDexterWebService()
     cherrypy.quickstart(webapp, '/', conf)