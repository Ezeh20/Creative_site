const button=document.querySelectorAll('.section-btn')

button.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change')
    })

})