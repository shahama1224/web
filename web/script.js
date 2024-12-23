let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
letsection=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    let top=window.scrollY;
    let offset = Sec.offset.offsettop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    
    if (top>=offset && top<offset+height){
        navlinks.forEach(navlinks=>{
            links.classList.remove('active');
        });
        document.querySelector('header nav a[href*=${id}]').classList.add('active');
    }

}

let header=documet.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

{
menuIcon.onclick.remove('bx-x');
navbar.classList.remove('active');
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


