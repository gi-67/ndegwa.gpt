
const submitButton = document.querySelector('#submit')
async function getMessage(){
    console.log('clicked')
   try{
    await fetch('',options)

   }catch{

   }
  
}
submitButton.addEventListener('click', getMessage)

