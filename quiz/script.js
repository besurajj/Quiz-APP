const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctOption: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctOption: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctOption: "Harper Lee"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctOption: "Pacific Ocean"
  },
  {
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Electron", "Neutron"],
    correctOption: "Atom"
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "199,792 km/s"],
    correctOption: "299,792 km/s"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Steve Jobs"],
    correctOption: "Charles Babbage"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Olive"],
    correctOption: "Oxygen"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctOption: "Diamond"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctOption: "Nitrogen"
  }
];


let currentQuesIndex = 0;

let incorrectAttempts = 0;

// console.log(quiz[currentQuesIndex].question)

function displyMcq(quiz) {
     var mcq = quiz[currentQuesIndex]
     document.getElementById('questions').innerHTML = mcq.question
     const optionList = document.getElementById('options')
     optionList.innerHTML =''
     
     mcq.options.forEach((option, index) => {
          const li = document.createElement('li')
          li.innerHTML = `<input type="radio" name="option" value="${option}" id="option${index} class="option"><label for="option${index}">${option}</label>`
          optionList.appendChild(li)
     })

}
 


function checkAns() {
     const selectedCheck = document.
          querySelector('input[name="option"]:checked')
     const mainDiv = document.querySelector('.main')
     const result = document.getElementById('result')

     const score =document.getElementById('score')
     if (selectedCheck) {
          const userSelect = selectedCheck.value
          // console.log(typeof userSelect)
          if (userSelect === quiz
          [currentQuesIndex].correctOption) {
               document.getElementById('score').innerHTML++
               result.innerHTML = "<font class='correct'> Correct Answer</font>"
               mainDiv.classList.add('pop');
               mainDiv.style.boxShadow = '0 0 10px 5px green';
               setTimeout(() => {
                    mainDiv.classList.remove('pop');
                    mainDiv.style.boxShadow = '0 0 0 0'
                    result.innerHTML = ""
               }, 1000);

          
               setTimeout(() => {
                    currentQuesIndex++;
                    if (currentQuesIndex < quiz.length) {
                         displyMcq(quiz)
                         document.getElementById('ques').innerHTML=`${currentQuesIndex+1}/10`
                    }
                    else {
                         result.innerText = `Congratulations! You have completed all the questions.  And You Got ${score.innerText} Score`;
                         document.getElementById('sub').style.display = "none"
                         document.getElementById('res').style.display = "block"
                    }
               }, 1000);

          //    console.log(score.innerHTML)
          }
          else {
       

               result.innerHTML = `incorrect! the correct answer is <font>${quiz[currentQuesIndex].correctOption}</font>`
               mainDiv.style.boxShadow = '0 0 10px 5px red';
             
        mainDiv.classList.add('shake');
               setTimeout(() => {
             document.getElementById('score').style.color="red"
             mainDiv.classList.remove('shake');
          //    document.getElementById('score').innerHTML--
        }, 500);
               
                       setTimeout(() => {
                    currentQuesIndex++;
                    if (currentQuesIndex < quiz.length) {
                         displyMcq(quiz)
                           document.getElementById('ques').innerHTML=`${currentQuesIndex+1}/10`
                         setTimeout(() => {
                              document.getElementById('score').style.color="black"
                              result.innerHTML = ""
                         },0)
                    }
                    else {
                         result.innerText = 'Congratulations! You have completed all the questions.';
                         setTimeout(() => {
                            
                              document.getElementById('sub').style.display = "none"
                       },10000)
                         document.getElementById('res').style.display = "block"
                    }
               }, 1000);
               // console.log(typeof quiz.correctOption)
          }

     } else {
          
          mainDiv.style.boxShadow = '0 0 10px 5px red';
        mainDiv.classList.add('shake');
        setTimeout(() => {
             mainDiv.classList.remove('shake');
          //    document.getElementById('score').innerHTML--
        }, 500);
     }


     result.style.display ="block"
}

function restart(val) {
          window.location.reload(val);
}

window.onload = function () {
     displyMcq(quiz)
}
