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

$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        menu_cross_func();
    }
});


/***** Topic *****/
$('.current-topic button').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#page-wrap').addClass('page-wrap-topic');
    setTimeout(function() {
        $('.topic-list').fadeIn(500);
    }, 500);
});

$('.cross button').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
});

/***** Topic-List *****/
$('.topic-navigation .food').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_local + "food.html";
        window.location.href = file_gh + "food.html";
    },1000);
    });

$('.topic-navigation .drink').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_local + "drink.html"
        window.location.href = file_gh+ "drink.html";;
    },1000);
});

$('.topic-navigation .treats').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_local + "treat.html"
        window.location.href = file_gh+ "treat.html";;
    },1000);
});

$('.topic-navigation .tools').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_local + "tool.html";
        window.location.href = file_gh + "tool.html";
    },1000);
});

$('.topic-navigation .room').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_local + "room.html";
        window.location.href = file_gh + "room.html";
    },1000);
});

/*****************
       Key
*****************/





/***********************************************************
                      Non-Event Function
************************************************************/

function menu_cross_func() {
    $('.site-navigation').fadeOut(500);
    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-menu');
    }, 500);
}


/***********************************************************
                       	   Test
************************************************************/
