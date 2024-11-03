document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector('.slider .list');
    const items = document.querySelectorAll('.slider .list .item');
    const dots = document.querySelectorAll('.slider .dots li');

    let active = 0;
    const lengthItems = items.length;

    // Function to move the slider to the next item
    function showNextSlide() {
        active = (active + 1) % lengthItems;
        reloadSlider();
    }

    // Function to reload the slider position based on the active item
    function reloadSlider() {
        const offsetLeft = items[active].offsetLeft;
        list.style.left = -offsetLeft + 'px';

        // Update active dot
        document.querySelector('.slider .dots li.active').classList.remove('active');
        dots[active].classList.add('active');
    }

    // Set up an interval for automatic sliding
    setInterval(showNextSlide, 3000);

    // Add click events for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            active = index;
            reloadSlider();
        });
    });
});

function myFunction(){
    alert("Your Message is Sucessfully send to Aaban Khan")
    }