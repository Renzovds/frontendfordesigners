function getUserQuery() {
    var config = {
        html: '',
        url: "http://dennistel.nl/movies "
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", config.url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            showMovies(data);


        } else {
            console.log("an error occured");
        }
    };
    xhr.send();
}

getUserQuery();

function showMovies(movies) {
    var slider = document.querySelector('#movies');
    for (var i = 0; i < movies.length; i++) {

        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myH2 = document.createElement('h2');
        var myP = document.createElement('p');



        myP.textContent = movies[i].simple_plot;
        myH2.textContent = movies[i].title;
        myDiv.appendChild(myH2);
        myDiv.appendChild(myP);
        myDiv.classList.add('slide-content');
        var bgImage = 'background-image: url(' + movies[i].cover + ')';
        myArticle.setAttribute('style', bgImage);
        myArticle.classList.add('slide');
        myArticle.appendChild(myDiv);

        slider.appendChild(myArticle);

        createSlider();
    }
}
