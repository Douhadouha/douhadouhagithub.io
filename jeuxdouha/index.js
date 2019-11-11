var $page1 = document.getElementById("page1");
var $page2 = document.getElementById("page2");
var $page3 = document.getElementById("page3"); 

let timeoutId;
let seconds;

var $correctImage = document.getElementById('correctImage');
var $wrongImage = document.getElementById('wrongImage');

var $results = document.querySelector(".results span");
let $compteurPoints = document.querySelector(".compteurPoints span"); 
var points = Number($compteurPoints.textContent); 

let $compteurQuestions = document.querySelector(".compteurQuestions span"); 
let questions = Number($compteurQuestions.textContent);



function updateQuestion() {

    if (questions === 5){
        $page2.classList.remove('active');
        $page3.classList.add('active');
        reset(); 
        
    }else {

    // RESET COMPTEUR TIME
    clearInterval(timeoutId);
    countdown();

    questions +=1; 
    $compteurQuestions.textContent = questions;  

    // RESET DU SHUFFLE DE QUESTION 
    shuffle(newAnswers);

    // RESET DES INPUT RADIOS 
    var $radios = [...document.querySelectorAll("input")]
    $radios.forEach(function ($radios){
    $radios.checked = false
    });

    // MISE A JOUR DES PAYS 
    var $question = document.querySelector(".questionBlock span");
    $question.innerHTML = newAnswers[0].pays;

    // MISE A JOUR DES QUATRE PROPOSITIONS DE VILLES 
    var $reponseTab = [...document.querySelectorAll(".questionBlock ul li span")];
    
    let villes = newAnswers[0].villes;
    shuffle(villes);
    $reponseTab.forEach(function($reponseTab, index){

        let ville = villes[index];
        $reponseTab.innerHTML = ville;
        $radios[index].setAttribute('value', ville)
    });
}
    }
    // START BUTTON
document.getElementById("start-button").onclick = function (){
   $page1.classList.remove('active');
   $page2.classList.add('active');
   updateQuestion();
}

   // VALID BUTTON
document.getElementById("valid-button").onclick = function (){
    
    // RECUPERER LA VALUE DE LA REPONSE COCHEE 
    var reponse;

    var $radios = [...document.querySelectorAll("input")];
    $radios.forEach(function ($radios){
        if ($radios.checked) {
            reponse = $radios.value;
        }
    })
    
    // CHECK DE LA REPONSE : BONNE OU MAUVAISE 

    var correctAnswer; 

    if (reponse === newAnswers[0].goodAnswer[0]){
        $correctImage.classList.add('active');
        points +=1;
        $compteurPoints.textContent = points;
        $results.textContent = points; 
         

    }
    else {
        $wrongImage.classList.add('active');
    
    }

    setTimeout(function () {
        $correctImage.classList.remove('active');
        $wrongImage.classList.remove('active');

        updateQuestion();
    }, 2000)


}


var answers = [
{
    pays: "de la France",
    villes : ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
    goodAnswer: ['Paris'], 
},
{
    pays: "de l'Allemagne",
    villes : ['Berlin', 'Munich', 'Stuttgart', 'Hambourg'],
    goodAnswer: ['Berlin'], 
}, 
{
    pays: "du Canada",
    villes : ['Ottawa', 'Quebec', 'Montréal', 'Vancouver'],
    goodAnswer: ['Ottawa'], 
},
{
    pays: "du Japon",
    villes : ['Tokyo', 'Kyoto', 'Osaka', 'Kobe'], 
    goodAnswer: ['Tokyo'], 
}, 
{
    pays :" du Nigeria",
    villes : ['Abuja', 'Lagos', 'Kano', 'Ibadan'],
    goodAnswer: ['Abuja'], 
}, 
{
    pays :"du Bangladesh",
    villes : ['Dacca','Bangalore','Bombay','Calcutta'],
    goodAnswer: ['Dacca'], 
}, 
{
    pays :"de l'Australie",
    villes : ['Canberra','Sydney','Melbourne','Brisbane'],
    goodAnswer: ['Canberra'], 
},
{
    pays :"de l'Italie",
    villes : ['Rome','Naples','Florence','Milan'],
    goodAnswer: ['Rome'], 
},
{
    pays :'de la Finlande', 
    villes : ['Helsinki','Oslo','Stockholm','Copenhague'],
    goodAnswer: ['Helsinki'], 
},
{
    pays :'de la Suède',
    villes : ['Stockholm','Trondheim','Copenhague','Oslo'],
    goodAnswer: ['Stockholm'], 
},
{
    pays :'de la Norvège',
    villes : ['Oslo','Trondheim','Copenhague','Stockholm'],
    goodAnswer: ['Oslo'], 
},
{
    pays: 'de la Russie',
    villes : ['Moscou','Saint-Petersbourg','Minsk','Vladivostok'],
    goodAnswer: ['Moscou'], 
},
{
    pays :"de l'Inde",
    villes : ['New Delhi','Bombay','Bangalore','Chennai'],
    goodAnswer: ['New Delhi'], 
},
{
    pays :'de la Biélorussie',
    villes : ['Minsk','Kiev','Poltava','Bratislava'],
    goodAnswer: ['Minsk'], 
},
{
    pays :"de l'Ukraine",
    villes : ['Kiev','Odessa','Donetsk','Louhansk'],
    goodAnswer: ['Kiev'], 
},
{
    pays : "de l'Egypte",
    villes : ['Le Caire','Alexandrie','Riyad','Louxor'],
    goodAnswer: ['Le Caire'], 
},
{
    pays: 'de la Tunisie', 
    villes: ['Tunis','Djerba','Rabat','Constantine'],
    goodAnswer: ['Tunis'], 
},
{
    pays: 'du Pakistan',
    villes: ['Islamabad','Karachi','Lahore','Peshawar'],
    goodAnswer: ['Islamabad'], 
},
{
    pays: 'de la Chine', 
    villes: ['Pekin','Taïwan','Hong-Kong','Bangkok'],
    goodAnswer: ['Pekin'], 
},
{
    pays: ' du Mexique', 
    villes: ['Mexico','Tijuana','Veracruz','La Paz'],
    goodAnswer: ['Mexico'], 
},
{
    pays: 'du Brésil', 
    villes: ['Brasilia','Rio de Janeiro','Sao Paulo','Salvador'],
    goodAnswer: ['Brasilia'], 
},
{
    pays: 'du Chili',
    villes: ['Santiago','Montevideo','Caracas','Sucre'],
    goodAnswer: ['Santiago'], 
},
{
    pays: "de l'Urugay", 
    villes: ['Montevideo','Buenos Aires','Santiago','Belem'],
    goodAnswer: ['Montevideo'], 
},
{
    pays: 'du Pérou', 
    villes: ['Lima','Sucre','Montevideo','Tijuana'],
    goodAnswer: ['Lima'], 
},
{
    pays: "de l'Argentine",
    villes: ['Buenos Aires','Tijuana','Caracas','Lima'],
    goodAnswer: ['Buenos Aires'], 
},
{
    pays: 'du Qatar',
    villes: ['Doha','Kabar','Abu Dhabi','Riyad'],
    goodAnswer: ['Doha'], 
},
{
    pays: 'du Maroc',
    villes: ['Rabat','Casablanca','Marrakech','Agadir'],
    goodAnswer: ['Rabat'], 
},
{
    pays: 'de la Croatie',
    villes: ['Zagreb','Skopje','Zadar','Split'],
    goodAnswer: ['Zagreb'], 
},
{
    pays: 'de la Lettonie',
    villes: ['Riga','Vilnius','Tallin','Varsovie'],
    goodAnswer: ['Riga'], 
},
{
    pays: 'de la Roumanie',
    villes: ['Bucarest','Budapest','Sofia','Skopje'],
    goodAnswer: ['Bucarest'], 
},
{
    pays: 'de la Bulgarie',
    villes: ['Sofia','Bucarest','Budapest','Cracovie'],
    goodAnswer: ['Sofia'], 
},
{
    pays: 'de la Turquie',
    villes: ['Ankara','Istanbul','Anatlya','Izmir'],
    goodAnswer: ['Ankara'], 
},
{
    pays: "de l'Iran",
    villes: ['Téhéran','Ispahan','Tabriz','Oman'],
    goodAnswer: ['Téhéran'], 
},
{
    pays: 'de la Slovaquie', 
    villes: ['Bratislava','Ostrava','Györ','Ljubljana'],
    goodAnswer: ['Bratislava'], 
},
{
    pays: 'de Djibouti',
    villes: ['Djibouti','Addis-Abeba','Djouba','Sanaa'],
    goodAnswer: ['Djibouti'], 
},
{
    pays: "de l'Ethiopie",
    villes: ['Addis-Abeba','Khartoum','Djouba','Sanaa'],
    goodAnswer: ['Ethiopie'], 
},
{
    pays: 'de la Serbie',
    villes: ['Belgrade','Riga','Cracovie','Sofia'],
    goodAnswer: ['Belgrade'], 
},
{
    pays: 'de la Suisse',
    villes: ['Berne','Genève','Bâle','Zurich'],
    goodAnswer: ['Berne'], 
},
{
    pays: 'du Vietnam',
    villes: ['Hanoï','Hô-Chi-Minh Ville','Bangkok','Vientiane'],
    goodAnswer: ['Hanoï'], 
},
{
   pays: 'de la Thaïlande',
    villes: ['Bangkok','Hanoï','Pattaya','Phuket'],
    goodAnswer: ['Bangkok'], 
},
{
    pays: "de l'Angleterre",
    villes: ['Londres','Liverpool','Manchester','Glasgow'],
    goodAnswer: ['Londres'], 
},
{
    pays: "de l'Irlande",
    villes: ['Dublin','Glasgow','Belfast','Cardiff'],
    goodAnswer: ['Dublin'], 
},
{
    pays: "de l'Island", 
    villes: ['Reykjavik','Kirkjubæjarklaustur','Grafarkirkja','Ásólfsskáli'],
    goodAnswer: ['Reykjavik'], 
},
{
    pays: 'de la Georgie',
    villes: ['Tbilissi','Gdansk','Brno','Linz'],
    goodAnswer: ['Tbilissi'], 
},
{
    pays: "de l'Estonie",
    villes: ['Tallinn','Vilnius','Riga','Linz'],
    goodAnswer: ['Tallinn'], 
},
{
    pays: 'de la Lituanie', 
    villes: ['Vilnius','Riga','Tallinn','Linz'],
    goodAnswer: ['Vilnius'], 
},
{
    pays: 'du Kenya', 
    villes: ['Nairobi', 'Wellington','Nouakchot','Addis-Abeba'], 
    goodAnswer: ['Nairobi'],   
},
];

//SHUFFLE DATA ANSWERS 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var newAnswers = shuffle(answers);


// COMPTEUR TIME

let $compteurTime = document.querySelector(".compteurTime a");

const countdown = function () {
    seconds = 30;
    $compteurTime.textContent = seconds;
    timeoutId = setInterval(() => {
        seconds -= 1;
        $compteurTime.textContent = seconds;

        if (seconds === 0) {
            $wrongImage.classList.add('active');
            setTimeout(function () {
                $wrongImage.classList.remove('active');
                updateQuestion();
            }, 2000)

        }
    } , 1000); 
}

function reset(){
   document.getElementsByClassName(".restart").onclick = function (){
       document.location.reload(true);
   }
}