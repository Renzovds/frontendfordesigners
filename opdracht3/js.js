function getUserQuery() {
    var config = {
        html: '',
        url: "https://blokweb.org/stories "
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", config.url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);


        } else {
            console.log("an error occured");
        }
    };
    xhr.send();

}
console.log("JOe");
getUserQuery()
