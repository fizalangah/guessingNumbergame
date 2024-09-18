 "use client"
 import { useState } from "react"


export default function Game() {
   
 const [hidepart,setHidepart] = useState(false);
 const [height,setHeight] = useState(200)
 const [changeButton,setChangebutton] = useState("start Game")
 const [pauseGame,setPausegame] = useState(false)
 const [randomNumber,setRandomnumber] = useState<number|boolean>(Math.floor(Math.random()*10) + 1) ;
 const [userGuess,setUseguess] = useState<number| undefined >(undefined)
 const [message,setMesage] = useState("")
 const [btn,setBtn] = useState("Guess");
 const [ gameOver,setGameover] = useState( false)
 const [hidepart2,sethisepart2] = useState(false)
 
  ///handel hidepar
 function handeleHidepart() {

  handlePauseGame()
    if (changeButton === "start Game") {
    setHeight(310)
    setHidepart(true);
    setChangebutton("pause")
    setPausegame(false)
    
    }else{
setHeight(200)
setHidepart(false)
setChangebutton("start Game")
    }
  handlePauseGame()
 }

   ///random number function
function handlerRandomNumber() {
handelerChangebtn()
handelhidepart2()
 if (!gameOver) {
  
  if (userGuess === randomNumber) {
    setMesage("congratulations you win!")
    
  
    
  } else{
    setMesage("you los! try again")
  }
  setBtn("play Again")
  setGameover(true)
  
}else{
resetGame()
}     
}

 ////toggle the btn 
 function handelerChangebtn() {
  setBtn((prevText) => (prevText === "guess" ? "Play Again" : "Guess"))
  }
  
   ///reset game
 function resetGame() {
  setRandomnumber(Math.floor(Math.random() * 10) + 1); // New random number
  setMesage("");
  setUseguess(undefined);
  setBtn("Guess");
  sethisepart2(false)
  setGameover(false); // Reset game state
  setPausegame(false)
}

      ///pause btn
 function handlePauseGame() {
        if (randomNumber) {

         setPausegame(true) }
 }


      ///second part hiding
  function handelhidepart2() {
    sethisepart2(true) }


  return (
    <div className="flex justify-center items-center">
      <div
        className="md:w-[500px] w-[300px] rounded-xl border-2 bg-white mt-[100px]"
        style={{ height: `${height}px` }} // Apply dynamic height
      >


    <h1 className=" md:text-3xl  sm:text-xl font-bold text-gray-900 flex justify-center items-center mt-[20px]">Number Guessing Game</h1>
    <p className="flex justify-center items-center mt-[20px] text-sm md:text-lg ">Try to guess the number between 1 and 10!</p>
    <div className="flex  justify-center items-center mt-[20px]"> <button   onClick={handeleHidepart} className="bg-black text-white p-1 w-[70px] md:w-[100px] md:p-2 rounded-xl" >

    
      {changeButton}</button></div>
   
   {hidepart && (
   
   <div>
    <div className=" flex flex-row">
        <input type="number"  placeholder="gues the number"
        value={userGuess || ''}
        onChange={(e) => setUseguess(parseInt(e.target.value))}
       className=" outline-none rounded-xl ml-[20px] border-2 mt-[20px] md:w-[300px] [200px] md:p-2 p-1"/>
        <div className="ml-[10px] mt-[25px]"> <button onClick={handlerRandomNumber}    className="bg-black text-white p-1 w-[70px] md:w-[100px] md:p-2 rounded-xl">{btn}</button></div>
        </div> 
          
        { hidepart2 &&<div className=" mt-[100px] bg-white p-2 rounded-xl flex justify-center items-center">
        <p className="flex justify-center items-center mt-[30px] md:text-xl  mb-[20px]">{message}</p>
        </div>
}
    
        </div>) }
</div>

    </div>
  )
}
