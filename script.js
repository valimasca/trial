var time = 60;

// Build the form with Questions
function BuildForm() {

    // Answer options and questions
    var ansOptions = ['a', 'b', 'c', 'd'];
    var questions =
        [
            {
                question: "Who famously crossed the river Rubicon, with an army which started a civil war in ancient Rome?",
                choices: ["Octavius", "Julius Caesar", "Marcus Arielius", "Pompey"]
            },

            {
                question: "What two mythological characters are associated with the birth of Rome?",
                choices: ["Romulus & Remus", "Joseph and Mary", "Minos & Minatar", "Horace & Osirus"]
            },

            {
                question: "If you compared the land owned by the Roman empire to todays map, how many countries would be contained in the Roman Empire?",
                choices: ["100", "104", "44", "12"]
            },

            {
                question: "Who is the Roman God of War?",
                choices: ["Zeus", "Odin", "Mars", "Minos"]
            },

            {
                question: "How many years did the Roman-Persian wars last?",
                choices: ["721", "42", "10", "3"]
            },

            {
                question: "What two months were named after Roman Emperors?",
                choices: ["January February", "July March", "August & March", "July and August"]
            },
            
            {
                question: "Which Roman Emperor adopted Christianity?",
                choices: ["Caesar", "Augustus", "Constantine", "Pompey"]
            },
    
            {
                question: "Which is not a Roman Emperor?",
                choices: ["Nero", "Caligula", "CLeopatra", "Tiberius"]
            },
    
            {
                question: "What sea did the Roman Empire surround?",
                choices: ["The Black Sea", "The Mediterranian Sea", "The Indian Sea", "The Red Sea"]
            }, 
            
            {
                question: "What was the largest unit of Soldiers in a Roman army?",
                choices: ["Centurion", "Legion", "Decant", "Echelon"]
            }, 
    
            {
                question: "What was poisoning the Roman water supply?",
                choices: ["mercury", "Cyanide", "deadly nightshade", "lead"],
            },
    
            {
                question: "What did gladiators fight in?",
                choices: ["Cage matches","Colliseum", "Areana", "Octagon"]
            }
        ];
        
    //Count down display
    $("#displayTime").text("Time Remaining: " + time);

    // Access the form
    var frm = $('form[name="quizForm"');

    // Add all the questions and multiple choice options to form
    for (var i = 0; i < questions.length; i++) {
        $("<h3/>", {
            text: questions[i].question
        }).appendTo(frm);

        var options = questions[i].choices;
        console.log(options);
        for (var j = 0; j < options.length; j++) {
            var x = $('<input type="radio" name=q' + i + ' value=' + ansOptions[j] + '>' + options[j] + '</input>');
            frm.append(x);

        }
        var br = $('<br><br>')
        frm.append(br);
    }

    // Add the submit button to the form
    frm.append('<br><br>');
    var submitBtn = $('<input type="submit" value="Submit Answers"/>');
    frm.append(submitBtn);

}


function start() {

    //Use setInterval to start clock
    $("#btnStart").remove();
    BuildForm();
    intervalId = setInterval(count, 1000);
}

function stop() {

    // stop the clock
    clearInterval(intervalId);
}

function count() {

    $("#displayTime").text("Time Remaining: " + time + " Seconds");
    time--;
    if (time == 0) {
        submitAnswers();
    }
}

function submitAnswers() {

    var total = 12;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // User Input
    var q0 = document.forms["quizForm"]["q0"].value;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;
    var q11 = document.forms["quizForm"]["q11"].value;

    //Count unanswered questions
    for (var i = 0; i < total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            unanswered++;
        }
    }

    //  Correct Answers
    var answers = ["b", "a", "c", "c", "a","d","c","c","b","b","d","b"];

    //check answers
    for (var i = 0; i < total; i++) {
        if (eval('q' + i) == answers[i]) {
            correct++;
        }
        else {
            incorrect++;
        }
    }

    $("form").empty();
    stop();
    $("#displayTime").empty();
    var done = $('<h2>Finished!</h2>');

    var correctTotal = $('<h3>Correct Answers: ' + correct + ' </h3>');
    var incorrectTotal = $('<h3>Incorrect Answers: ' + incorrect + ' </h3>');
    var unansweredTotal = $('<h3>Unanswered: ' + unanswered + ' </h3>');
    $("#results").append(done);
    $("#results").append(correctTotal);
    $("#results").append(incorrectTotal);
    $("#results").append(unansweredTotal);

    return false;

}

$("#btnStart").on("click", function () {
    start();
});