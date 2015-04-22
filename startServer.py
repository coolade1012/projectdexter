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

    def POST(self, pname='bulbasaur'):
        identifier = pname.lower()
        session = connect()
        data_Species = util.get(session, tables.PokemonSpecies, identifier)
        data = util.get(session, tables.Pokemon, identifier)
        poke = ["NAME AND ID:", data_Species.name, data_Species.id]
        
        #Gathering Data into list with first entry being the name of list
        #list name is used for spliting in javascript later on
        pokemon_BasicInfo = [";BASIC_INFO: ", data_Species.generation, data.types, data.height, data.weight, data.base_experience, data.all_abilities]
        pokemon_Description = [";Description: ",data_Species.flavor_text]
        pokemon_BaseStats = [";BASE_STATS: ",data.stats]
        pokemon_Evolution = [";EVOLUTION: ",data_Species.evolves_from_species_id]
        pokemon_TypeMatchup = [";TYPE_MATCHUP ",]
        pokemon_MovesList = [";MOVE_LIST: ", data.pokemon_moves]
        pokemon_Breeding = [";BREEDING: ",data_Species.hatch_counter]
        #Combining all the list into one for spliting in javascript
        pokemon = poke + pokemon_BasicInfo + pokemon_Description + pokemon_BaseStats + pokemon_Evolution + pokemon_TypeMatchup + pokemon_MovesList + pokemon_Breeding
        #makes list a string with each entry seperated by commas
        result =  ','.join(map(str, pokemon))
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
            '/favicon.ico':
            {
                'tools.staticfile.on': True,
                'tools.staticfile.filename:' '/static/images/favicon.ico'
            }
     }
     webapp = ProjectDexter()
     webapp.generator = ProjectDexterWebService()
     cherrypy.quickstart(webapp, '/', conf)