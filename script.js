{/* <div class="joke" id="joke">Awesorm joke is loading...</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */}

// PROMISES

// 2condition => success =>fail 

// fetch()
// reject 
// fulfiled

// ************  async es8     **********
// GET https://icanhazdadjoke.com/
// GET https://icanhazdadjoke.com/

const jokes =document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

//  *********** Exaxple of promiss ***********

// const generatejokes = () => {

//     const setHeader = {
//         headers:{
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json() )
//     .then((data) => {
//         jokes.innerHTML = data.joke; 
//     }).catch((error) => {
//         console.log(error);
//     })
// }

//    #########   ASYNC AWAIT ***********

const generatejokes = async () => {

    try{
    const setHeader = {
        headers:{
            Accept : "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
    }catch(err){
      console.log(`the error is ${err}`);
    }
    
}

jokeBtn.addEventListener('click',generatejokes);
generatejokes();
