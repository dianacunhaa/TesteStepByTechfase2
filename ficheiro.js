/* script.js */

// seleciona o botão CTA
var ctaButton = document.querySelector('.cta-button');

// adiciona um evento de clique ao botão CTA
ctaButton.addEventListener('click', function(event) {
    // previne o comportamento padrão do botão CTA
    event.preventDefault();

    // rola para a seção "take-action"
    document.querySelector('#take-action').scrollIntoView({
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var videoContainer = document.querySelector('.video-container');
  
    videoContainer.style.transform = 'translateY(' + (-scrollPosition / 2) + 'px)';
  });