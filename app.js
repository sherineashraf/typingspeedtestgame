let selectBox = document.getElementById('#sb');
let myForm = document.forms['form']
let frm = document.querySelector('#form')
let btn = document.querySelector(".btn");
let start = document.querySelector(".start");
let word = document.querySelector(".the-word");
let input = document.querySelector(".inp");
let theWords = document.querySelector(".wrds");
let timeLeftSpan = document.querySelector(".time-left span");
let score = document.querySelector(".score");
let total = document.querySelector(".total");
let selectedSpan = document.querySelector(".selected span");
let finish = document.querySelector(".finish");
let menu = myForm.levels;
let menuOptions = myForm.levels.options;




const words = [
    "html",
    "css",
    "js",
    "react",
    "bootstrap",
    "django",
    "node",
    "python",
    "php",
    "c++",
    "laravel"
   
];



const levels = {
"easy": 5,
"default": 4,
"normal": 3,
"hard": 2
};



let easylevelSeconds = levels.easy;
let normalLevelseconds = levels.normal;
let hardLevelSeconds = levels.hard;
let defaultLevelSeconds = levels.default;








btn.onclick = function(e){
    e.preventDefault();
    select();
   
   }

   
   start.onclick = function (){
    start.remove();
    input.focus();
    checking();
    total.innerHTML = words.length;
   
   }

   function select (){
    let v = menu.value;
   

    if (v === "easy"){
        selectedSpan.innerHTML = "easy";
        timeLeftSpan.innerHTML = easylevelSeconds;
       
    }
         else if(v === "normal"){
            selectedSpan.innerHTML = "normal";
        timeLeftSpan.innerHTML = normalLevelseconds;
        } 
        if( v === "hard"){
            selectedSpan.innerHTML = "hard";
        timeLeftSpan.innerHTML = hardLevelSeconds;
        }
       
    } 
    function checking (){
        let randomWord = words[Math.floor(Math.random() * words.length)];
        let wordIndex = words.indexOf(randomWord);
        words.splice(wordIndex, 1);
        word.innerHTML = randomWord;
        theWords.innerHTML = "";
        for ( let i = 0; i < words.length; i++){
            let div = document.createElement("div");
            let txt = document.createTextNode(words[i]);
            div.appendChild(txt);
            theWords.appendChild(div);
        }
        startplaying();

    }

       function startplaying (){
       let eas = 5;
        let nor = 3;
        let har = 2;
      
        let timer = setInterval (()=>{
            if (timeLeftSpan.innerHTML = "easy"){
                timeLeftSpan.innerHTML = eas--;
            }
            else if (timeLeftSpan.innerHTML = "normal"){
                timeLeftSpan.innerHTML = nor--;
            } 
            if (timeLeftSpan.innerHTML = "hard"){
                timeLeftSpan.innerHTML = har--;
            }
            if ( timeLeftSpan.innerHTML === "0"){
                clearInterval(timer);
                comparing();
            }

           



        }, 1000)
       } 
       function comparing (){
        if (word.innerHTML === input.value){
            input.value = "";
            score.innerHTML++;
            if(words.length > 0){
                checking();
            } else{
                theWords.remove();
                let span = document.createElement('span');
                span.className = "succeed";
                let spantxt = document.createTextNode("Congratulations");
                span.appendChild(spantxt);
                finish.appendChild(span);
            }
        }  

         else{
            let element = document.createElement("span");
            element.className = "failed";
            let text = document.createTextNode("Gameover");
            element.appendChild(text);
            finish.appendChild(element);

        }
       }