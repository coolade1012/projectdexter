        //This is the core of project Dexter
        //It holds all the scripts for the search function, 
        //and sorting of information into the appropraite places on the page
        $(document).ready(function () {
            //search function
            $("#generate-result").click(function (e) {
                $.post("/generator", {
                        "pname": $("input[name='pname']").val()
                    })
                    .done(function (string) {
                        var data = string.split(";");
                        var a = data;
                        var nameID = a[0].split(",");
                        var basicInfo = a[1].split(",");
                        var description = a[2].split(",");
                        var baseStats = a[3].split(",");
                        var evolution = a[4].split(",");
                        var typeMatchup = a[5].split(",");
                        var movesList = a[6].split(",");
                        var breeding = a[7].split(",");

                        $("#PokeName").text(nameID[1]);
                        $("#IDnumber").text("National Dex #" + nameID[2]);

                        //Changes sprite based on search result
                        $("#Sprite").attr("src", "/static/images/artwork/" + parseInt(nameID[2]) + ".png");

                        var type = basicInfo[2].slice(32);
                        type = type.split(" ");
                        $("#BasicInfo").html("Generation: " + basicInfo[1].replace(/\D/g, '') + '<br/>' + "Primary Type: " + type[1].replace(">", " "));
                        
                        $("#Description").text(description[1]);
                        $("#BaseStats").text(baseStats[1]);
                        $("#Evolution").text("ID # of Pokemon evovled from: " + evolution[1]);
                        $("#TypeMatchup").text(typeMatchup[1]);
                        $("#MovesList").text(movesList[1]);
                        $("#Breeding").text("Base # of steps needed to hatch= " + (parseInt(breeding[1])+1)*255);
                        
                    
                        $("#the-result").show();
                        $("#the-display").val(basicInfo);
                    })
                    .fail(function () {
                        alert("POKEMON NOT FOUND!!!\n\n Possible Solutions:\n1: Check Spelling.\n2: Search only accepts names currently.")
                    });
                e.preventDefault();
            });

            $("#replace-result").click(function (e) {
                $.ajax({
                        type: "PUT",
                        url: "/generator",
                        data: {
                            "another_result": $("#the-result").val()
                        }
                    })
                    .done(function () {
                        alert("Replaced!");
                    });
                e.preventDefault();
            });

            $("#delete-result").click(function (e) {
                $.ajax({
                        type: "DELETE",
                        url: "/generator"
                    })
                    .done(function () {
                        $("#the-result").hide();
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