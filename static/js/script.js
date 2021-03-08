var score;

function startgame() {
    score = 0;
    console.log("Hello world!");
    $("#start-button").remove();
    options = [ question1answer, question1option1, question1option2, question1option3 ];
    options.sort();
    $("#question-text").append('<h1>' + question1 + '</h1>')
    $("#question-answers").append('<div id="answer-box1"></div><div id="answer-box2"></div><div id="answer-box3"></div><div id="answer-box4"></div>');
    console.log( options );
    console.log( options[0] )
    $("#answer-box1").append('<button type="button" onclick="question2(this.innerHTML)"><h2>' + options[0] + '</h2></button>');
    $("#answer-box2").append('<button type="button" onclick="question2(this.innerHTML)"><h2>' + options[1] + '</h2></button>');
    $("#answer-box3").append('<button type="button" onclick="question2(this.innerHTML)"><h2>' + options[2] + '</h2></button>');
    $("#answer-box4").append('<button type="button" onclick="question2(this.innerHTML)"><h2>' + options[3] + '</h2></button>');

}

function question2(answerclicked) {
    console.log('Worked!')
    options = [ question2answer, question2option1, question2option2, question2option3 ];
    options.sort();
    document.getElementById("answer-box1").innerHTML = ('<button type="button" id="startbtn" onclick="question2(this.innerHTML)"><h2>' + options[0] + '</h2></button>');

}
