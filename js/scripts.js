/***********************************************************
                         	Var
************************************************************/

var file_local = "file:///Users/philiprurka/Documents/Dev/Sub-Projects/CAF/CAF-Project/pages/";

var file_gh = "http://philiprurka.github.io/CAF-Project/pages/";



/***********************************************************
                      Append + CSS + Hide
************************************************************/





/***********************************************************
                       Event Function
************************************************************/

load_fadeIn();




/*****************
      Mouse
*****************/


/***** Menu *****/
$('.threeway button').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#page-wrap').addClass('page-wrap-menu');

    setTimeout(function() {
        $('.site-navigation').fadeIn(500);
    }, 500);
});

$('.cross button').click(function(event) {
    event.preventDefault();
    menu_cross_func();
});

$('#overlay').click(function(event) {
    event.preventDefault();
    menu_cross_func();
});


/***** Topic *****/
$('.search-icon button').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#page-wrap').addClass('page-wrap-topic');
    setTimeout(function() {
        $('.topic-list').fadeIn(500);
    }, 500);
});

$('.cross button').click(function(event) {
    event.preventDefault();
    overlay_transition_remove();
});

/***** Topic-List *****/
$('.topic-navigation .food').click(function(event) {

    event.preventDefault();
    overlay_transition_remove();
    wrapper_fadeOut();
    change_url('food.html');
    });

$('.topic-navigation .drink').click(function(event) {

    event.preventDefault();
    overlay_transition_remove();
    wrapper_fadeOut();
    change_url('drink.html');
});

$('.topic-navigation .treat').click(function(event) {

    event.preventDefault();
    overlay_transition_remove();
    wrapper_fadeOut();
    change_url('treat.html');
});

$('.topic-navigation .tool').click(function(event) {

    event.preventDefault();
    overlay_transition_remove();
    wrapper_fadeOut();
    change_url("tool.html");
});

$('.topic-navigation .room').click(function(event) {

    event.preventDefault();
    overlay_transition_remove();
    wrapper_fadeOut();
    change_url("room.html");
});

/*****************
       Key
*****************/


$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        menu_cross_func();
    }
});


/***********************************************************
                      Non-Event Function
************************************************************/


function menu_cross_func() {
    $('.site-navigation').fadeOut(500);
    $('.topic-list').fadeOut(500);
    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-menu');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
}

function load_fadeIn() {
    $('.wrapper').fadeIn(500);
}

function wrapper_fadeOut() {
    setTimeout(function () {
        $('.wrapper').fadeOut(500);
    }, 1000);
};

function overlay_transition_remove() {
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
};

function change_url(page) {
    setTimeout(function () {
        // window.location.href = file_local + page;
        window.location.href = file_gh + "food.html";
    },1500);
};


/***********************************************************
                       	   Test
************************************************************/
