let textBlock = document.getElementById("text__block")

function scrollFunc2(){
    second.scrollIntoView({behavior: 'smooth'});
    textBlock.setAttribute('class','second__textblock')
    textBlock.classList.add('second__img')
};

function scrollFunc3(){
    second.scrollIntoView({behavior: 'smooth'});
    textBlock.setAttribute('class','second__textblock')
    textBlock.classList.add('third__img')
};

function scrollFunc4(){
    second.scrollIntoView({behavior: 'smooth'});
    textBlock.setAttribute('class','second__textblock')
    textBlock.classList.add('fourth__img')
};

function scrollFunc5(){
    second.scrollIntoView({behavior: 'smooth'});
    textBlock.setAttribute('class','second__textblock')
    textBlock.classList.add('fifth__img')
};

window.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.querySelector('.backToTop');

    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', function name() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 800) {
                scrollUpButton.classList.add('backToTop_visible');
            } else {
                scrollUpButton.classList.remove('backToTop_visible');
            }
        });
    }
});

let settings = document.getElementById('settings');
function rotate(){
    settings.style.transform = "rotate(" + deg + "deg)";
};