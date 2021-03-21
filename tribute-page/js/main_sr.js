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
    package.classList.remove('package');
    smallScreen = true;
}

/* *** [Citati] *** */
const citat = document.querySelector('.quote')

const citati = [
    {citat:"Izuzetni ljudi mogu činiti izuzetne stvari, ali kurs sudbine jednog naroda biće uvek vođen ne samo prolaznim naporima jednog ili čak više izuzetnih ljudi nekog doba, već istrajnom moći tradicija jednog naroda."},
    {citat:"Male stvari mogu imati veliki uticaj na kasniji tok događaja u nečijem životu."},
    {citat:"Za mladog čoveka uopšte nije nesreća biti bez novaca, ako se odlučio da sam sebi krči put samostalnom životu, pod uslovom da u sebi ima dovoljno snage da savlada sve teškoće sa kojima će se sukobiti"},
    {citat:"Znanje, to su zlatne lestvice preko kojih se ide u nebesa; znanje je svetlost koje osvetljava naš put kroz život i vodi nas u budućnost punu večne slave"},
    {citat:"Nisam ja došao u Ameriku kao pečalbar da zaradim pare. Ja sam došao sa znanjem a znanje mi je donelo imanje, a ne obratno. Imanje je, dakle došlo kao nešto sporedno."},  
]

let mesto = 0;

function azurirajCitate() {
    citat.innerHTML = '';
    
    const text =  document.createTextNode(citati[mesto].citat);
    citat.appendChild(text);

    mesto++;

    if (mesto > citati.length - 1) {
        mesto = 0;
    }
}

setInterval(azurirajCitate, 10000);