

const projectDetails=[
    {
        title:"Portfolio Website",
        description:"Questo portfolio è stato realizzato con HTML5, CSS3 e JavaScript vanilla. Include animazioni CSS, smooth scrolling, e un design completamente responsive. Utilizza CSS Grid e Flexbox per il layout, e implementa il pattern di design mobile-first."
    },
    {
        title:"Portfolio Website",
        description:"Questo portfolio è stato realizzato con HTML5, CSS3 e JavaScript vanilla. Include animazioni CSS, smooth scrolling, e un design completamente responsive. Utilizza CSS Grid e Flexbox per il layout, e implementa il pattern di design mobile-first."
    },
    {
        title:"Portfolio Website",
        description:"Questo portfolio è stato realizzato con HTML5, CSS3 e JavaScript vanilla. Include animazioni CSS, smooth scrolling, e un design completamente responsive. Utilizza CSS Grid e Flexbox per il layout, e implementa il pattern di design mobile-first."
    }
];




function openLightbox(index){
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightbox-title').textContent = projectDetails[index].title;
    document.getElementById('lightbox-description').textContent = projectDetails[index].description;
    lightbox.classList.add('active');   
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}





