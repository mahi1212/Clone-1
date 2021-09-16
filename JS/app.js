const navbar = document.getElementById('nav')
window.onscroll = () =>{
    if(window.pageYOffset > 300){
        navbar.classList.add('scrolled')

    }else{
        navbar.classList.remove('scrolled')
    }
}

document.querySelector('.main-div').addEventListener('click', () => {
    document.querySelector('.text-div').style.display = 'block'
})
