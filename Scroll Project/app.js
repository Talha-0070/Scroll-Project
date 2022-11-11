// Scrolling project

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// First nav-bar toggle

const toggleBtn = document.querySelector('.toggle-btn');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');





toggleBtn.addEventListener('click',function(){
    linksContainer.classList.toggle('show-links');

     const containerHeight = linksContainer.getBoundingClientRect().height;
     const linksHeight = links.getBoundingClientRect().height;
     
     if(containerHeight === 0){
         linksContainer.style.height = `${linksHeight}px`;
     }else{
         linksContainer.style.height = 0;
     }

});

const nav = document.getElementById('nav');

// **************Fixed navbar**************

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
   // const navBar = document.querySelector('.nav-bar')

    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav-bar');
    }else{
        nav.classList.remove('fixed-nav-bar');
    }
});


 //***********Smooth Scroll***********

// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault();

        
        
        // nevigate to specific spot

        const id = e.currentTarget.getAttribute('href').slice(1); // "slice" is used here for removing "#" from the links like #about. now it is "about"; 
        const element = document.getElementById(id);

        // calculate the height

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight; // subtracting the height of the nav-bar because it covers the the upper part of the section
        
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
});