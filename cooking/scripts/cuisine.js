//script for navigation bar
$(document).ready(function(){
    $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
    });
    $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
    });
});
//script for changing image
$(document).ready(function(){
    $('#change-img').click(function(){
    let visibleImage=$(this).attr('src');
    if(visibleImage=='Images/burnt-pancake.jpeg'){
        $('#change-img').fadeOut("slow", function(){
            $(this).attr('src', 'Images/nice-pancakes.jpeg');
        });
        $('#change-img').fadeIn("slow");
    }
    else{
        $('#change-img').fadeOut("slow", function(){
            $(this).attr('src', 'Images/burnt-pancake.jpeg');
        });
        $('#change-img').fadeIn("slow");
    }
    });
});
//script for scrolling images
if (document.URL.indexOf("mainPage.html") >= 0) {
    const carousel=document.querySelector(".carousel"),
    firstImg=carousel.querySelectorAll("img")[0];
    arrowIcons=document.querySelectorAll(".wrapper i");
    let firstImgWidth=firstImg.clientWidth+14*(carousel.clientWidth/firstImg.clientWidth);
    console.log(carousel.clientWidth/firstImg.clientWidth);
    
    const showHideIcons=()=>{
        let scrollWidth=carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display=carousel.scrollLeft==0 ? "none":"block";
        arrowIcons[1].style.display=carousel.scrollLeft==scrollWidth ? "none":"block";
    }
    
    arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carousel.scrollLeft+=icon.id=="left" ? -firstImgWidth:firstImgWidth;
        setTimeout(()=>showHideIcons(),60);
    })
    }); 
  }
//script for quiz
if (document.URL.indexOf("history.html") >= 0){
    const questions=[
        {
            question:"Where were first found traces of ash?",
            answers:[
                {text:"China", correct:false},
                {text:"South Africa", correct:true},
                {text:"North Africa", correct:false},
            ]
        },
        {
            question:"Who created ash?",
            answers:[
                {text:"Neanderthal", correct:true},
                {text:"Homo Sapiens", correct:false},
                {text:"Australopithecus", correct:false},
            ]
        },
        {
            question:"Where were the first pots made?",
            answers:[
                {text:"Japan", correct:false},
                {text:"India", correct:false},
                {text:"China", correct:true},
            ]
        },
        {
            question:"What was introduced in the 17th century?",
            answers:[
                {text:"spices", correct:false},
                {text:"chocolate houses", correct:true},
                {text:"caviar", correct:false},
            ]
        },
    ];
    const questionElement=document.getElementById("question");
    const answerButtons=document.getElementById("answer-buttons");
    const nextButton=document.getElementById("next-btn");
    let currentQuestionIndex=0;
    let score=0;
    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        })
    }
    
    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="play Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
            handleNextButton();
        }else{startQuiz();}
    })
    startQuiz();
}

//script for filter
if (document.URL.indexOf("Recipies.html") >= 0){
const list=document.querySelector('.list'),
items=document.querySelectorAll('.cards'),
listItems=document.querySelectorAll('.list-item');

function filter(){
list.addEventListener('click', event=>{
const targetId=event.target.dataset.id;
const target=event.target;
     
    listItems.forEach(listItem=>listItem.classList.remove('active'));
    target.classList.add('active');

if(targetId==='all'){
        getItems('cards');
}
else{getItems(targetId);
}
})
}
filter();
function getItems(className){
    items.forEach(item=>{
        if(item.classList.contains(className)){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}
}
