        //This is the core of project Dexter
        //It holds all the scripts for the search function, 
        //and sorting of information into the appropraite places on the page
        //and sorting of information into the appropraite places on the page
        $(document).ready(function () {
            //search function
            $("#generate-result").click(function (e) {
                $.post("/generator", {
                        "pname": $("input[name='pname']").val()
                    })
                    .done(function (string) {
                        $("#the-result").show();
                        $("#the-display").val(string);
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