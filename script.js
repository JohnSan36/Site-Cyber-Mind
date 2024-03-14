function animar(){
    const btn = document.getElementById('btn-menuu') 
    btn.classList.toggle('ativar')
}


const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menuu')

menuDiv.addEventListener('click', animarMenu)
    
function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativado')
}
