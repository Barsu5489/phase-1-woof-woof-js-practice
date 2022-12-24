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
    const dogInfo = document.getElementById('dog-info')
    pup.forEach(pup=>{
        const span =document.createElement('span')
        span.textContent = pup.name
        dogBar.appendChild(span)

        const img = document.createElement('img')
        img.src = `${pup.image}`

        const h2 = document.createElement('h2')
        h2.textContent = pup.name

        const btn = document.createElement('button')
        btn.textContent = 'Good Dog!'
        // btn.style.display = 'block'

        const btn2 = document.createElement('button')
        btn2.textContent = 'Bad dog'
        btn2.style.display ='none'
        dogInfo.appendChild(btn2)
        
        dogInfo.appendChild(img)
        dogInfo.appendChild(h2)
        dogInfo.appendChild(btn)

        btn.addEventListener('click', ()=>{
            console.log(`${pup.name}`)
            if (btn.textContent == 'Good Dog!'){
                btn.textContent = 'Bad Dog!' 
            }else{
                btn.textContent = 'Good Dog!';
            }
            
        })
        
    })
  
}

document.addEventListener('DOMContentLoaded', ()=>{
fetchPup()
})