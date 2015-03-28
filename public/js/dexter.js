        //This is the core of project Dexter
        //It holds all the scripts for the search function, 
        //and sorting of information into the appropraite places on the page
        //and sorting of information into the appropraite places on the page
        $(document).ready(function () {
           //search function
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
           
           //Expanding and Collapsing Button info
           $('.tour-caption-Basic').click(function () {
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
           $('.tour-caption-Dex').click(function () {
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
           $('.tour-caption-Stats').click(function () {
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
           $('.tour-caption-Evolution').click(function () {
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
           $('.tour-caption-Type').click(function () {
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
           $('.tour-caption').click(function () {
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
           $('.tour-caption-Breeding').click(function () {
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