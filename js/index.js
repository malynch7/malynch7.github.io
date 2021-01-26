$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs();

    $('#main-nav').pushpin({
        top: $("#info-view").offset().top,
        bottom: $("#info-view").offset().top + $("#info-view").outerHeight()
            - $("#main-nav").height()
    });
    initProjectView();
});

function initProjectView(){
    let cards = document.querySelectorAll('#project-view .card');
    let maxHeight = 0;

    for (let index in cards){
        maxHeight = Math.max(cards[index].style.height, maxHeight);
    }
    for (let index in cards){
        cards[index].height(maxHeight);
    }
}

