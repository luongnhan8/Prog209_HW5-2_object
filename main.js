///Element data
let output_js = document.getElementById("output");
let moviename_js = document.getElementById("moviename");
let rating_js = document.getElementById("rating");
let list_js = document.getElementById("list");

///Button data for ecent
let addButton_js = document.getElementById("Add");
let show_js = document.getElementById("show");

///Create Element
let ul = document.createElement("ul")


document.addEventListener("DOMContentLoaded", function(event) {
    list_js.style.display = "none";

    addButton_js.addEventListener("click", function() {
        let addmovies = new Movie (
            moviename_js.value,
            rating_js.value
        );
        if (addmovies.validate()){
            movielist[movielist.length] = addmovies;
            clear();
            console.log(movielist) ///Test Console
        } else{
            alert("Type agian. Sorry.");
            clear();
        }

    });

    show_js.addEventListener("click", function(){
        list_js.style.display = "block";
        ///list_js.style.visibility = "visible";
        list_js.appendChild(ul);
        for(i=0; i <movielist.length; i++) {
            let li = document.createElement("li")
            ul.appendChild(li)
            //li.innerHTML = movielist.toString()
            li.innerHTML = movielist[i].name + ", " + movielist[i].rating
        };
        movielist.length = 0 /// to prevent overlap

    });


    function clear() {
        moviename_js.value = "";
        rating_js.value = "";
    }



    let movielist = [];
});