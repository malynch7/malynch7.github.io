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
    let cards = $('#project-view .card');
    let maxheight = 0;

    for (let index in cards){
        maxheight = Math.max(cards[index].style.height, maxheight);
    }
    for (let index in cards){
        cards[index].height(maxheight);
    }
}

