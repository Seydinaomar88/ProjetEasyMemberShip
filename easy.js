
window.addEventListener('scroll', () =>{
    const sec1 = document.querySelector('#sec1')
    if(window.scrollY > 200){
        sec1.style.display = 'flex'
    }else{
        sec1.style.display = 'none'
    }

})
window.addEventListener('scroll',() => {
    const sec2 = document.querySelector('#sec2')
    if(window.scrollY > 450){
        sec2.style.display = 'flex'
    } else{
        sec2.style.display = 'none'
    }
})

window.addEventListener('scroll', () =>{
    const sec3 = document.querySelector('#sec3')
    if(window.scrollY > 450){
        sec3.style.display = 'flex'
    } else{
        sec3.style.display = 'none'
    }
})
window.addEventListener('scroll', () =>{
    const sec4 = document.querySelector('#sec4')
    if(window.scrollY > 1300){
        sec4.style.display = 'flex'
    } else{
        sec4.style.display = 'none'
    }
})

window.addEventListener('scroll', () =>{
    const sec5 = document.querySelector('#sec5')
    if(window.scrollY > 1900){
        sec5.style.display = 'flex'
    } else {
        sec5.style.display = 'none'
    }
})

window.addEventListener('scroll', () =>{
    const sec6 = document.querySelector('#sec6')
    if(window.scrollY > 2600){
        sec6.style.display = 'flex'
    } else{
        sec6.style.display = 'none'
    }
})