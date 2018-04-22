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
