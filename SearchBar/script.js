const input=document.getElementById('searchInput')


input.addEventListener("keyup",showthis)


function showthis(event){
  let username=event.target.value.toLowerCase()
  let allNamesDOMCollection=document.getElementsByClassName('name')
  for(let i=0;i<allNamesDOMCollection.length;i++){
    const currentName=allNamesDOMCollection[i].textContent.toLowerCase()
    if(username.includes(currentName)){
      allNamesDOMCollection[i].style.display='block'
    }
    else{
      allNamesDOMCollection[i].style.display='none'
    }
  }
  
}
