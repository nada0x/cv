let navbar = document.querySelector('.navbar');
const sr= ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});
sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.btn-1',{delay:400, origin: 'top'});
sr.reveal('.btn-2',{delay:400, origin: 'top'});