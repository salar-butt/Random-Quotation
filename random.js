var p = document.getElementById('quotes');
var button = document.getElementById('button');

const quotes = [
  "It's never too late to be what you might've been. ―George Eliot.",
  "Trust yourself that you can do it and get it.” ―Baz Luhrmann.",
  "Nothing is Impossible,World Itself says",
  "Believe in Yourself everyhing is Possible",
  "Our greatest Weakness is giving Up, We must try one more Time",
  "Think Big, Trust Yourself and Make it Happens for You.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston ",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D.",
    "Life is what happens when you're busy making other plans. - John Lennon"
];


  function handleFunction(){
// parstInt() and Math.floor() both are used to convert Maath.random() no into integer
 var randomIndex = parseInt(Math.random() * quotes.length);
 const randomQuote=quotes[randomIndex]
var dispquote = p.textContent=randomQuote
console.clear()
// console.log(dispquote,e)
}
button.addEventListener('click',handleFunction)

button.addEventListener('click',()=>{
  button.classList.add('button2')
  setTimeout(()=>{button.classList.remove('button2')},1000)
 
  })




// -------------------------correct code-------------
// function handleFunction() {
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     let randomQuote = quotes[randomIndex];
//    p.textContent = randomQuote;
// }

// button.addEventListener('click', handleFunction);



