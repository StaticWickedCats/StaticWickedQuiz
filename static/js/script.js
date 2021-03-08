var score;

function startgame() {
    score = 0;
    $("#start-button").remove(); 
    options = [ question1answer, question1option1, question1option2, question1option3 ];
    options.sort();
    $("#question-text").append('<h1 id="thequestion">' + question1 + '</h1>')
    $("#question-answers").append('<div id="answer-box1"></div><div id="answer-box2"></div><div id="answer-box3"></div><div id="answer-box4"></div>');
    $("#answer-box1").append('<h2><button type="button" id="startbtn" onclick="q2(this.innerHTML)">' + options[0] + '</button></h2>');
    $("#answer-box2").append('<h2><button type="button" id="startbtn" onclick="q2(this.innerHTML)">' + options[1] + '</button></h2>');
    $("#answer-box3").append('<h2><button type="button" id="startbtn" onclick="q2(this.innerHTML)">' + options[2] + '</button></h2>');
    $("#answer-box4").append('<h2><button type="button" id="startbtn" onclick="q2(this.innerHTML)">' + options[3] + '</button></h2>');

}

function q2(answerclicked) {
    if (answerclicked === question1answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question2 + "'</h1>");
    options2 = [ question2answer, question2option1, question2option2, question2option3 ];
    options2 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q3(this.innerHTML)'>'" + options2[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q3(this.innerHTML)'>'" + options2[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q3(this.innerHTML)'>'" + options2[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q3(this.innerHTML)'>'" + options2[3] + "'</button></h2>");
}

function q3(answerclicked) {
    if (answerclicked === question2answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question3 + "'</h1>");
    options3 = [ question3answer, question3option1, question3option2, question3option3 ];
    options3 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q4(this.innerHTML)'>'" + options3[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q4(this.innerHTML)'>'" + options3[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q4(this.innerHTML)'>'" + options3[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q4(this.innerHTML)'>'" + options3[3] + "'</button></h2>");
}

function q4(answerclicked) {
    if (answerclicked === question3answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question4 + "'</h1>");
    options4 = [ question4answer, question4option1, question4option2, question4option3 ];
    options4 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q5(this.innerHTML)'>'" + options4[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q5(this.innerHTML)'>'" + options4[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q5(this.innerHTML)'>'" + options4[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q5(this.innerHTML)'>'" + options4[3] + "'</button></h2>");
}

function q5(answerclicked) {
    if (answerclicked === question4answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question5 + "'</h1>");
    options5 = [ question5answer, question5option1, question5option2, question5option3 ];
    options5 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q6(this.innerHTML)'>'" + options5[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q6(this.innerHTML)'>'" + options5[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q6(this.innerHTML)'>'" + options5[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q6(this.innerHTML)'>'" + options5[3] + "'</button></h2>");
}

function q6(answerclicked) {
    if (answerclicked === question5answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question6 + "'</h1>");
    options6 = [ question6answer, question6option1, question6option2, question6option3 ];
    options6 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q7(this.innerHTML)'>'" + options6[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q7(this.innerHTML)'>'" + options6[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q7(this.innerHTML)'>'" + options6[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q7(this.innerHTML)'>'" + options6[3] + "'</button></h2>");
}

function q7(answerclicked) {
    if (answerclicked === question6answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question7 + "'</h1>");
    options7 = [ question7answer, question7option1, question7option2, question7option3 ];
    options7 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q8(this.innerHTML)'>'" + options7[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q8(this.innerHTML)'>'" + options7[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q8(this.innerHTML)'>'" + options7[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q8(this.innerHTML)'>'" + options7[3] + "'</button></h2>");
}

function q8(answerclicked) {
    if (answerclicked === question7answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question8 + "'</h1>");
    options8 = [ question8answer, question8option1, question8option2, question8option3 ];
    options8 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q9(this.innerHTML)'>'" + options8[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q9(this.innerHTML)'>'" + options8[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q9(this.innerHTML)'>'" + options8[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q9(this.innerHTML)'>'" + options8[3] + "'</button></h2>");
}

function q9(answerclicked) {
    if (answerclicked === question8answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question9 + "'</h1>");
    options9 = [ question9answer, question9option1, question9option2, question9option3 ];
    options9 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q10(this.innerHTML)'>'" + options9[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q10(this.innerHTML)'>'" + options9[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q10(this.innerHTML)'>'" + options9[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q10(this.innerHTML)'>'" + options9[3] + "'</button></h2>");
}

function q10(answerclicked) {
    if (answerclicked === question9answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question10 + "'</h1>");
    options10 = [ question10answer, question10option1, question10option2, question10option3 ];
    options10 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q11(this.innerHTML)'>'" + options10[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q11(this.innerHTML)'>'" + options10[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q11(this.innerHTML)'>'" + options10[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q11(this.innerHTML)'>'" + options10[3] + "'</button></h2>");
}

function q11(answerclicked) {
    if (answerclicked === question10answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question11 + "'</h1>");
    options11 = [ question11answer, question11option1, question11option2, question11option3 ];
    options11 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q12(this.innerHTML)'>'" + options11[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q12(this.innerHTML)'>'" + options11[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q12(this.innerHTML)'>'" + options11[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q12(this.innerHTML)'>'" + options11[3] + "'</button></h2>");
}

function q12(answerclicked) {
    if (answerclicked === question11answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question12 + "'</h1>");
    options12 = [ question12answer, question12option1, question12option2, question12option3 ];
    options12 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q13(this.innerHTML)'>'" + options12[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q13(this.innerHTML)'>'" + options12[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q13(this.innerHTML)'>'" + options12[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q13(this.innerHTML)'>'" + options12[3] + "'</button></h2>");
}

function q13(answerclicked) {
    if (answerclicked === question12answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question13 + "'</h1>");
    options13 = [ question13answer, question13option1, question13option2, question13option3 ];
    options13 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q14(this.innerHTML)'>'" + options13[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q14(this.innerHTML)'>'" + options13[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q14(this.innerHTML)'>'" + options13[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q14(this.innerHTML)'>'" + options13[3] + "'</button></h2>");
}

function q14(answerclicked) {
    if (answerclicked === question13answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question14 + "'</h1>");
    options14 = [ question14answer, question14option1, question14option2, question14option3 ];
    options14 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q15(this.innerHTML)'>'" + options14[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q15(this.innerHTML)'>'" + options14[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q15(this.innerHTML)'>'" + options14[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q15(this.innerHTML)'>'" + options14[3] + "'</button></h2>");
}

function q15(answerclicked) {
    if (answerclicked === question14answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question15 + "'</h1>");
    options15 = [ question15answer, question15option1, question15option2, question15option3 ];
    options15 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q16(this.innerHTML)'>'" + options15[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q16(this.innerHTML)'>'" + options15[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q16(this.innerHTML)'>'" + options15[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q16(this.innerHTML)'>'" + options15[3] + "'</button></h2>");
}

function q16(answerclicked) {
    if (answerclicked === question15answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question16 + "'</h1>");
    options16 = [ question16answer, question16option1, question16option2, question16option3 ];
    options16 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q17(this.innerHTML)'>'" + options16[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q17(this.innerHTML)'>'" + options16[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q17(this.innerHTML)'>'" + options16[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q17(this.innerHTML)'>'" + options16[3] + "'</button></h2>");
}

function q17(answerclicked) {
    if (answerclicked === question16answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question17 + "'</h1>");
    options17 = [ question17answer, question17option1, question17option2, question17option3 ];
    options17 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q18(this.innerHTML)'>'" + options17[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q18(this.innerHTML)'>'" + options17[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q18(this.innerHTML)'>'" + options17[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q18(this.innerHTML)'>'" + options17[3] + "'</button></h2>");
}

function q18(answerclicked) {
    if (answerclicked === question17answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question18 + "'</h1>");
    options18 = [ question18answer, question18option1, question18option2, question18option3 ];
    options18 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q19(this.innerHTML)'>'" + options18[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q19(this.innerHTML)'>'" + options18[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q19(this.innerHTML)'>'" + options18[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q19(this.innerHTML)'>'" + options18[3] + "'</button></h2>");
}

function q19(answerclicked) {
    if (answerclicked === question18answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question19 + "'</h1>");
    options19 = [ question19answer, question19option1, question19option2, question19option3 ];
    options19 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q20(this.innerHTML)'>'" + options19[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q20(this.innerHTML)'>'" + options19[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q20(this.innerHTML)'>'" + options19[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q20(this.innerHTML)'>'" + options19[3] + "'</button></h2>");
}

function q20(answerclicked) {
    if (answerclicked === question19answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question20 + "'</h1>");
    options20 = [ question20answer, question20option1, question20option2, question20option3 ];
    options20 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q21(this.innerHTML)'>'" + options20[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q21(this.innerHTML)'>'" + options20[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q21(this.innerHTML)'>'" + options20[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q21(this.innerHTML)'>'" + options20[3] + "'</button></h2>");
}

function q21(answerclicked) {
    if (answerclicked === question20answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question21 + "'</h1>");
    options21 = [ question21answer, question21option1, question21option2, question21option3 ];
    options21 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q22(this.innerHTML)'>'" + options21[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q22(this.innerHTML)'>'" + options21[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q22(this.innerHTML)'>'" + options21[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q22(this.innerHTML)'>'" + options21[3] + "'</button></h2>");
}

function q22(answerclicked) {
    if (answerclicked === question21answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question22 + "'</h1>");
    options22 = [ question22answer, question22option1, question22option2, question22option3 ];
    options22 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q23(this.innerHTML)'>'" + options22[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q23(this.innerHTML)'>'" + options22[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q23(this.innerHTML)'>'" + options22[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q23(this.innerHTML)'>'" + options22[3] + "'</button></h2>");
}

function q23(answerclicked) {
    if (answerclicked === question22answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question23 + "'</h1>");
    options23 = [ question23answer, question23option1, question23option2, question23option3 ];
    options23 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q24(this.innerHTML)'>'" + options23[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q24(this.innerHTML)'>'" + options23[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q24(this.innerHTML)'>'" + options23[1] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='q24(this.innerHTML)'>'" + options23[3] + "'</button></h2>");
}

function q24(answerclicked) {
    if (answerclicked === question23answer) {
        score++;
    }
    document.getElementById('question-text').innerHTML =("<h1 id='thequestion'>'" + question24 + "'</h1>");
    options24 = [ question24answer, question24option1, question24option2, question24option3 ];
    options24 .sort();
    document.getElementById('answer-box1').innerHTML = ("<h2><button type='button' id='startbtn' onclick='endgame(this.innerHTML)'>'" + options24[0] + "'</button></h2>");
    document.getElementById('answer-box2').innerHTML = ("<h2><button type='button' id='startbtn' onclick='endgame(this.innerHTML)'>'" + options24[1] + "'</button></h2>");
    document.getElementById('answer-box3').innerHTML = ("<h2><button type='button' id='startbtn' onclick='endgame(this.innerHTML)'>'" + options24[2] + "'</button></h2>");
    document.getElementById('answer-box4').innerHTML = ("<h2><button type='button' id='startbtn' onclick='endgame(this.innerHTML)'>'" + options24[3] + "'</button></h2>");
}

function endgame(answerclicked) {
    if (answerclicked === question24answer) {
        score++;
    }
    $("#question-text").remove();
    $("#question-answers").remove();
    $("#answer-box1").remove();
    $("#answer-box2").remove();
    $("#answer-box3").remove();
    $("#answer-box4").remove();
    $("#score").append('<h1> Your Score is ' + score + '</h1>')


}
