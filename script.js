//Header Toggle

let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed= new Typed('.auto-input',{
    strings : ['Web Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
    
})

// Active Link state on Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');

// Get All Sections
let sections= document.querySelectorAll('section');

window.addEventListener('scroll',function (){
    const scrollPos=window.scrollY + 20;
    sections.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos<(section.offsetTop+section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});

// Download Button

var fileURL = 'images/resume.pdf';

    document.getElementById('downloadButton').addEventListener('click', function() {
        var a = document.createElement('a');
        a.href = fileURL;
        a.download = 'resume.pdf'; // Set the desired file name
        a.target = '_blank';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });