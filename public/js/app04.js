       $(document).ready(function () {

           $("#search").click(function (e) {
               $.post("/generator", {
                       "length": $("input[name='length']").val()
                   })
                   .done(function (string) {
                       $("#the-string").show();
                       $("#the-string input").val(string);
                   });
               e.preventDefault();
           });

           $("#delete-string").click(function (e) {
               $.ajax({
                       type: "DELETE",
                       url: "/generator"
                   })
                   .done(function () {
                       $("#the-string").hide();
                   });
               e.preventDefault();
           });
           
           $('.img-responsive').click(function () {
               if (this.value === 'collapse') {
                   // if it's open close it
                   open = false;
                   this.value = 'expand';
                   $(this).next("div.Pokemon-Info").hide("slow");
               } else {
                   // if it's close open it
                   open = true;
                   this.value = 'collapse';
                   $(this).siblings("[value='collapse']").click();
                   $(this).next("div.Pokemon-Info").show("slow");
               }
           });
       });