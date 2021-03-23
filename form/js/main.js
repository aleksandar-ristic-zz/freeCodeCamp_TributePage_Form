const submitted = document.querySelector('#submitted');
const survey  = document.querySelector('main');

window.addEventListener('load', loader);

function loader() {
    const SMALL_WIDTH = 800;

    if (window.innerWidth < SMALL_WIDTH) {
        survey.style.transitionDuration = "150ms";
    }

    survey.classList.add('open');
    
}

function btnHandleSubmit() {
    survey.classList.toggle('open');
    submitted.classList.toggle('hidden');
    setTimeout(scrollFunc, 1500);
}

function scrollFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}