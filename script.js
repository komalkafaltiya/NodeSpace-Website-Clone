// NAVBAR 

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

//COUNTER FUNCTION 

document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    let hasStarted = false;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateCounter(element, endValue) {
        let startValue = 5;
        const duration = 2000; // Duration in milliseconds
        const stepTime = 50; // Update interval in milliseconds
        const steps = duration / stepTime;
        const increment = endValue / steps;

        function updateCounter() {
            startValue += increment;
            if (startValue >= endValue) {
                element.textContent = Math.round(endValue);
                return;
            }
            element.textContent = Math.round(startValue);
            setTimeout(updateCounter, stepTime);
        }

        updateCounter();
    }

    window.addEventListener('scroll', function () {
        if (isInViewport(counter) && !hasStarted) {
            hasStarted = true;
            animateCounter(counter, 30); // Target value
        }
    });
});

//Form Validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Read More Function
function read_more(event) {
    event.preventDefault(); // Prevent scrolling to top
    var hiddenContent = document.getElementById('hidden-first');
    var readMoreLink = document.getElementById('read-more');

    if (hiddenContent.style.display === 'block') {
        hiddenContent.style.display = 'none';
        readMoreLink.textContent = 'Read More >>';
    } else {
        hiddenContent.style.display = 'block';
        readMoreLink.textContent = 'Read Less <<';
    }
}

document.getElementById('read-more').addEventListener('click', read_more);

