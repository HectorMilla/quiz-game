//quiz game
( 
    function () {
    function Question (question, answerChoices, correctAnswer) {
     this.question = question,
     this.answerChoices = answerChoices,
     this.correctAnswer = correctAnswer
}


let question1 = new Question('what is the best console',
 ['xbox', 'ps4', 'switch', 'all the above'], '3')

let question2 = new Question('what is the best food',
 ['pizza', 'tacos', 'pasta', 'chicken'], '1')

let question3 = new Question('what is the best season', 
['winter', 'summer', 'fall', 'spring'], '3')

let allQuestions = [question1, question2, question3]
let questionPicker = Math.floor(Math.random() * allQuestions .length);
let answerChoice = allQuestions [questionPicker].answerChoices;


let askQuestion = function (questions) {
    console.log(questions[questionPicker].question)
    for(i = 0; i < answerChoice.length; i++) {
        let answers = i + '.)' + answerChoice[   i] 
        console.log(answers)   
    }

    var response = prompt('enter correct answer')
let checkAnswer = function (response) {
     
    if (response !== allQuestions[questionPicker].correctAnswer){
        console.log("incorrect answer pls try again")
        
    var response = prompt('enter correct answer')
        checkAnswer(response)
    } else if (response == allQuestions[questionPicker].correctAnswer) {
        console.log('correct')
    }
}
checkAnswer(response)
    }

   
askQuestion(allQuestions);})();
