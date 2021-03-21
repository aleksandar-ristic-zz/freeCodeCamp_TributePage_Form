/* *** [Scroll Animation] *** */
const boxes = document.querySelectorAll('.box');
const package = document.querySelector('.package');
var smallScreen = false;

window.addEventListener('scroll', checkBoxes);

function initialCheck() {
    const maxWidth = 800;

    if ( window.innerWidth > maxWidth) {
        checkBoxes();
    }
    else {
        fillBoxes();
    }
}

function checkBoxes() {

    if (smallScreen) return;

   const triggerBottom = window.innerHeight / 5 * 4;

   boxes.forEach(box => {
       const boxTop = box.getBoundingClientRect().top;
       const packageTop = package.getBoundingClientRect().top;

       if (boxTop < triggerBottom) {
           box.classList.add('show');
       }
       else {
           box.classList.remove('show');
       }

       if (packageTop < triggerBottom) {
           package.classList.add('open');
       }
       else {
           package.classList.remove('open');
       }
   });
}

function fillBoxes() {
    boxes.forEach(box => box.classList.add('show'));
    package.classList.add('open');
    smallScreen = true;
}

/* *** [Quotes]  *** */
const quote = document.querySelector('.quote');

const quotes = [
    {quote:"Truth is beautiful and divine, no matter how humble its origin; it is the same in the musty boiler-room as it is in the glorious stars of heaven."},
    {quote:"The discovery of an important need is almost as important as the invention which satisfies this need."},
    {quote:"Look at those animals and remember the greatest scientists in the world have never discovered how to make grass into milk."},
    {quote:"Truth is beautiful and divine no matter how humble its origin."},
    {quote:"We would never get away from it. ... It's bad enough as it is, but with the wireless telephone one could be called up at the opera, in church, in our beds. Where could one be free from interruption?"}
];

let idx = 0;

function updateQuotes(){
    quote.innerHTML = '';
    
    const text =  document.createTextNode(quotes[idx].quote);
    quote.appendChild(text);

    idx++;

    if (idx > quotes.length - 1) {
        idx = 0;
    }
}

setInterval(updateQuotes, 10000);