var Quiz = [
    {
        question: "What is the value of Pi (π) ?",
        options: {
            a: "3.142",
            b: "22/7",
            c: "44/14",
            d: "all of above"
        },
        correctAnswer: "all of above"
    },
    {
        question: "X^0 = ?",
        options: {
            a: "0",
            b: "1",
            c: "x",
            d: "∞"
        },
        correctAnswer: "1"
    },
    {
        question: "tan(x) = ?",
        options: {
            a: "x(cot(x))",
            b: "1/cot(x)",
            c: "sin(x)/cos(x)",
            d: "both b & c"
        },
        correctAnswer: "both b & c"
    },
    {
        question: "2/0",
        options: {
            a: "∞",
            b: "0",
            c: "1",
            d: "2",
        },
        correctAnswer: "∞"
    },
    {
        question: "20% of 200",
        options: {
            a: "400",
            b: "20",
            c: "20*2",
            d: "20/2"
        },
        correctAnswer: "20*2"
    }
];
var score = 0;
var count = 0
function next(e) {
    removeActiveClass();
    if(count<4){
        count++;    
        show(count);
        if(count==4){
            e.innerText = "Finish Test"
        }
    }
    else{
        document.getElementById("question").innerHTML = `<h1>Your Score : ${score}</h1>`;
        document.getElementById("options").innerHTML = "";
        document.getElementById("btn").innerHTML = "";
        
    }
}

function show(i) {
    var question = document.getElementById("question");
    question.innerHTML = `<h1>${Quiz[i].question}</h1>`

    var options = document.getElementById("options");
    var optLi = options.getElementsByTagName('li');

    optLi[0].innerHTML = `${Quiz[i].options.a}`
    optLi[1].innerHTML = `${Quiz[i].options.b}`
    optLi[2].innerHTML = `${Quiz[i].options.c}`
    optLi[3].innerHTML = `${Quiz[i].options.d}`

}

function addActiveClass(e) {
    removeActiveClass();
    e.classList.add('active');
}

function removeActiveClass() {

    var options = document.getElementById("options");
    var optLi = options.getElementsByTagName('li');

    for (var i = 0; i < optLi.length; i++) {
        optLi[i].classList.remove('active');
        optLi[i].classList.remove('correct');
        optLi[i].classList.remove('incorrect');
    }
}

function addScore() {
    var optList = document.getElementById("options");
    var selectedOpt = optList.getElementsByClassName("active");


    if (selectedOpt[0].innerText == Quiz[count].correctAnswer) {
        score++
        console.log(score)
        selectedOpt[0].classList.add("correct");
    }
    else {
        selectedOpt[0].classList.add("incorrect")

        var optListChilds = optList.getElementsByTagName("li");
        for (var i = 0; i < optListChilds.length; i++) {
            if (optListChilds[i].innerText == Quiz[count].correctAnswer) {
                optListChilds[i].classList.add("correct");
            }
        }

    }


}