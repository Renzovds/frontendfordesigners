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
    var slider = document.querySelector('#slides');
    for (var i = 0; i < movies.length; i++) {

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myP = document.createElement('p');
        var myPhoto = document.createElement('img');


        myP.textContent = movies[i].simple_plot;
        myH2.textContent = movies[i].title;
        myPhoto.src = movies[i].cover;
        myArticle.appendChild(myPhoto);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myP);
        myArticle.classList.add('slide');

        slider.appendChild(myArticle);
    }

    var firstSlide = document.querySelector('#slides article');
    firstSlide.classList.add('showing');

    makeSlider();


}
