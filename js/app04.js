       $(document).ready(function() {
        
         $("#search").click(function(e) {
           $.post("/generator", {"length": $("input[name='length']").val()})
            .done(function(string) {
               $("#the-string").show();
               $("#the-string input").val(string);
            });
           e.preventDefault();
         });

         $("#delete-string").click(function(e) {
           $.ajax({
              type: "DELETE",
              url: "/generator"
           })
           .done(function() {
              $("#the-string").hide();
           });
           e.preventDefault();
         });

       });
