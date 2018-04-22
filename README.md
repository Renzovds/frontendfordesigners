# frontendfordesigners

frontendfordesigners
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

Deze schets heeft mij geholpen om de juiste html elementen aan te maken in mijn javascript.
Hier is te zien dat ik mijn schets precies aangehouden heb:

![Screenshot](cover%20frontend.PNG?raw=true)


