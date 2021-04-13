function Result() {
    var score = 0;
    var m_score = 0;
    var a_score = 0;
    var q1a1 = document.getElementById('q1a1');
    var q1a2 = document.getElementById('q1a2');
    var q1a3 = document.getElementById('q1a3');
    var q1a4 = document.getElementById('q1a4');
    if (q1a3.checked == true) {
        score++;
        m_score++;
    }
    var q2a1 = document.getElementById('q2a1');
    var q2a2 = document.getElementById('q2a2');
    var q2a3 = document.getElementById('q2a3');
    var q2a4 = document.getElementById('q2a4');
    if (q2a3.checked == true) {
        score++;
        m_score++;

    }
    var q3a1 = document.getElementById('q3a1');
    var q3a2 = document.getElementById('q3a2');
    var q3a3 = document.getElementById('q3a3');
    var q3a4 = document.getElementById('q3a4');
    if (q3a1.checked == true) {
        score++;
        m_score++;

    }
    var q4a1 = document.getElementById('q4a1');
    var q4a2 = document.getElementById('q4a2');
    var q4a3 = document.getElementById('q4a3');
    var q4a4 = document.getElementById('q4a4');
    if (q4a4.checked == true) {
        score++;
        m_score++;

    }
    var q5a1 = document.getElementById('q5a1');
    var q5a2 = document.getElementById('q5a2');
    var q5a3 = document.getElementById('q5a3');
    var q5a4 = document.getElementById('q5a4');
    if (q5a2.checked == true) {
        score++;
        m_score++;

    }


    var q6a1 = document.getElementById('q6a1');
    var q6a2 = document.getElementById('q6a2');
    if (q6a1.checked == true) {
        score++;
        a_score++;
    }


    var q7a1 = document.getElementById('q7a1');
    var q7a2 = document.getElementById('q7a2');
    var q7a3 = document.getElementById('q7a3');
    var q7a4 = document.getElementById('q7a4');
    if (q7a3.checked == true) {
        score++;
        a_score++;

    }

    var q8a1 = document.getElementById('q8a1');
    var q8a2 = document.getElementById('q8a2');
    var q8a3 = document.getElementById('q8a3');
    var q8a4 = document.getElementById('q8a4');
    if (q8a2.checked == true) {
        score++;
        a_score++;

    }

    var q9 = document.getElementById('q9');
    if (q9.value == "a^2+2ab+b^2"|| q9.value == "a^2+b^2+2ab" ) {
        score++;
        a_score++;

    }

    var q10 = document.getElementById('q10');
    if (q10.value == "(a+b)(a-b)" ||q10.value == "(a-b)(a+b)" ) {
        score++;
        a_score++;

    }




    document.write("<h1>  RESULT </h1>")
    document.write("YOU GOT " + m_score + " OUT OF 5 IN MATH QUIZ <br>")
    document.write("YOU GOT " + a_score + " OUT OF 5 IN ALGERBA QUIZ <br>")
    document.write("YOU GOT " + score + " OUT OF 10 IN TOTAL <br>")
}

