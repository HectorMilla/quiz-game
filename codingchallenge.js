//quiz game
function Question (question, answerChoices, correctAnswer) {
     this.question = question,
     this.answerChoices = answerChoices,
     this.correctAnswer = correctAnswer
}

let question1 = new Question('what is the best console',
 ['xbox', 'ps4', 'switch', 'all the above'], '4')

let question2 = new Question('what is the best food',
 ['pizza', 'tacos', 'pasta', 'chicken'], '1')

let question2 = new Question('what is the best season', 
['winter', 'summer', 'fall', 'spring'], '4')

