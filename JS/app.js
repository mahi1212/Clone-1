const navbar = document.getElementById('nav')
window.onscroll = () =>{
    if(window.pageYOffset > 300){
        navbar.classList.add('scrolled')
        
    }else{
        navbar.classList.remove('scrolled')
    }
}