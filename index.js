
const numarParagraf = document.getElementById('numar')
const incrementareBtn =document.getElementById('incrementareBtn')
const decrementareBtn =document.getElementById('decrementareBtn')



incrementareBtn.addEventListener('click',()=>{
  let numberRez = parseInt(numarParagraf.textContent);
  numberRez +=1;
  numarParagraf.textContent = numberRez;

})
decrementareBtn.addEventListener('click',()=>{
    let numberRez = parseInt(numarParagraf.textContent);
    numberRez -=1;
    numarParagraf.textContent = numberRez;
  
})