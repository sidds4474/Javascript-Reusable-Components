const overlay=document.getElementById('overlay')
const openModal=document.getElementById('open-modal')
const closeModal=document.getElementById('close-modal')

openModal.addEventListener("click",openModalFunc)
closeModal.addEventListener("click",closeModalFunc)

function openModalFunc(e){
  e.preventDefault();
  overlay.style.display='block'
}
function closeModalFunc(e){
  e.preventDefault();
  overlay.style.display='none'
}