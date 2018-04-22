# frontendfordesigners

Dit design is voor een iphone 6 gemaakt.

De eerste stap van dit project was om correct een JSON file in te laden. Dit heb ik op deze manier gedaan:

```
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
            console.log("Ooops het is niet gelukt.");
        }
    };
    xhr.send();
}

getUserQuery();
```


Doormiddel van een film API heb ik een carousel gemaakt. In deze carousel zit een cover van de film en de titel. Je kunt door zes films klikken met je muis of met de pijltjes.

Eerst heb ik een schets gemaakt van hoe de website in elkaar zou moeten zitten.

![Screenshot](schetsStructuur.jpeg?raw=true)

Deze schets heeft mij geholpen om de juiste html elementen aan te maken in mijn javascript. De elementen heb ik zo toegevoegd in javascript:

```
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

```

Hier is te zien dat ik mijn schets precies aangehouden heb:

![Screenshot](cover%20frontend.PNG?raw=true)

Het moeilijkste gedeelte om te maken was de carousel. Hiermee heb ik veel iteraties gemaakt en het wilde telkens niet goed lukken. Uiteindelijk is het goed gekomen en is de code heel simpel. Dit is hoe ik het heb gedaan:

```
function makeSlider() {
    var controls = document.querySelectorAll('.controls');
    for (var i = 0; i < controls.length; i++) {
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;

    function nextSlide() {
        goToSlide(currentSlide, currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide, currentSlide - 1);
    }

    function goToSlide(current, next) {
        if (next < 0) {
            next = slides.length - 1;
            currentSlide = slides.length - 1;
        } else if (next > slides.length - 1) {
            next = 0
            currentSlide = 0
        } else {
            currentSlide += next - current;
        }
        console.log(current, next);
        slides[current].classList.remove("showing");
        slides[next].classList.add("showing");

    }

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function () {
        nextSlide();
    };

    previous.onclick = function () {
        previousSlide();
    };

    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 37) {
            previousSlide();
        } else if (e.keyCode == 39) {
            nextSlide();
        }
    })

}
```

Hier zie je dat de code redelijk kort is en erg eenvoudig is gehouden. Voorheen had ik veelste complexe code waardoor ik het zelf allemaal niet meer begreep.

De laatste stap die ik gemaakt heb is css toevoegen. Ik heb doormiddel van keyframes een aantal animaties gemaakt. Dit heb ik doormiddel van deze code gedaan:

```
.showing {
    opacity: 1;
    z-index: 2;
    animation: stretch 0.5s ease-out 0s alternate 1 none running;
}

@keyframes stretch {
    0% {
        transform: scale(.7);
    }
    100% {
        transform: scale(1);
    }
}

```

```

.controls {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    border: 0;
    color: white;
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 0;
    margin-top: 100%;
    z-index: 3;
    position: absolute;
    animation: colorSwitch 6s infinite;
}

@keyframes colorSwitch {
    0% {
        color: rgba(255, 255, 255);
    }
    20% {
        color: rgba(255, 0, 0);
    }
    40% {
        color: rgba(255, 153, 51);
    }
    60% {
        color: rgba(51, 204, 255);
    }
    80% {
        color: rgba(153, 204, 255);
    }
    100% {
        color: rgba(255, 102, 153);
    }
}

```

```
h2 {
    position: relative;
    margin-top: -160%;
    text-align: center;
    color: black;
    font-size: 30px;
    margin-bottom: 32px!important;
    animation: rotation 1s linear 1;
    
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

```

Mijn eindproduct is te zien in het mapje opdracht 3.
