/*
Description: Primary front-end logic for portfolio at malynch7.github.io.
Author: Mark Lynch
Created: 10-07-2020
*/

/*==== General ==============================================================*/

$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
    $('.tabs').tabs();

    fitPageToSize();
    activatePopulatedContactFields();

    window.addEventListener("resize", fitPageToSize);
});

function fitPageToSize() {
    setHeroToInnerWindow();
    activatePushpin();
}

function activatePushpin() {
    const infoView = $("#info-view");
    $('#main-nav').pushpin({
        top: infoView.offset().top,
        bottom: infoView.offset().top + infoView.outerHeight() - $("#main-nav").height()
    });
}

function setHeroToInnerWindow() {
    const heroContainer = document.querySelector('.parallax-container');
    const navbar = document.getElementById('nav-container');
    const navbarHeight = window.getComputedStyle(navbar,null).getPropertyValue('height');
    heroContainer.style.height = ((window.innerHeight) - parseInt(navbarHeight) - 2) + 'px';
}



/*==== Contact Me ===========================================================*/

function activatePopulatedContactFields() {
    const messageElement = document.getElementById('contact-message');

    M.updateTextFields();
    M.textareaAutoResize(messageElement);
}