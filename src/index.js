function fetchPup(){
    fetch(' http://localhost:3000/pups')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        renderPup(data)
    })
}

function renderPup(pup){
    const dogBar = document.getElementById('dog-bar')
    pup.forEach(pup=>{
        const span =document.createElement('span')
        span.textContent = pup.name
        dogBar.appendChild(span)
    })
  
}

document.addEventListener('DOMContentLoaded', ()=>{
fetchPup()
})