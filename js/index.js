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

    const infoView = $("#info-view");
    $('#main-nav').pushpin({
        top: infoView.offset().top,
        bottom: infoView.offset().top + infoView.outerHeight()
            - $("#main-nav").height()
    });

    activatePopulatedContactFields();
    //initProjectView();
});


/*==== Featured Projects ====================================================*/

function initProjectView(){
    let cards = $('#project-view .card');
    let maxHeight = 0;

    for (const card of cards){
        maxHeight = Math.max(parseInt(card.style.height), maxHeight);
    }
    for (const card of cards){
        card.height(maxHeight);
    }
}


/*==== Contact Me ===========================================================*/

function activatePopulatedContactFields() {
    M.updateTextFields();
    const messageElement = document.getElementById('contact-message');
    M.textareaAutoResize(messageElement);
}