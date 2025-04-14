const question = [
    {
        'que':' Which is of the following is a markup language?',

        'a':'HTML',
        'b':'CSS',
        'C':'JS',
        'd':'Python',
        'correct':'a',
    },
    {
     'que':' Which of the following colors contain equal amounts of RBG?',

        'a':'white',
        'b':'gray',
        'C':'black',
        'd':'all of the above',
        'correct':'d',
    },
    {
    'que': 'What is the correct syntax to write an HTML comment?',
        'a': '<!--comment-->',
        'b':'//',
        'C':'**',
        'd':'all of the above',
        'correct':'a',
    },
    {
'que': 'What is the smallest header in HTML by default?',
        'a': 'h1',
        'b':'h2',
        'C':'h4',
        'd':'h6',
        'correct':'d',
    }
]
let index=0;
let total =question.length;
let right=0;
let wrong=0;
const quebox=document.getElementById("quebox");
const optionInputs=document.querySelectorAll(".options");

const loadQuestion = () =>{
    if(index===total)
    {
        return endQuiz();
    }
    reset();

    const data=question[index];
    console.log(data);
    quebox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;

};


const submitQuiz = ()=>{
    const data = question[index];
    const ans = getAnswer();
    if(ans === data.correct)
       
 { right++;

}  
else{
    wrong++;
}
index++;
loadQuestion();

};
  const   getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer = input.value ;
            }
        }
    );
    return answer;
};


const reset = ()=>{
    optionInputs.forEach(
        (input )=>{
            input.checked=false;
        }
    );
};

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>thankyou for playing quiz</h3>
    <h2>${right}/${total} are correct</h2>
       `;
};
loadQuestion();