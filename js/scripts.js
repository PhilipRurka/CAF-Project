/***********************************************************
                         	Var
************************************************************/

var file = "file:///Users/philiprurka/Documents/Dev/Sub-Projects/CAF/CAF-Project/pages/";
var file_index = "file:///Users/philiprurka/Documents/Dev/Sub-Projects/CAF/CAF-Project/";




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
    $('#pre-page').addClass('pre-page-menu');

    setTimeout(function() {
        $('.menu').fadeIn(500);
    }, 500);
});

$('.cross button').click(function(event) {
    event.preventDefault();
    $('.menu').fadeOut(500);

    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-menu');
    }, 500);
});


/***** Topic *****/
$('.topic a').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#pre-page').addClass('pre-page-topic');

    setTimeout(function() {
        $('.topic-list').fadeIn(500);
    }, 500);
});

$('.cross button').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);

    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
});


$('.topic-container .food').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file_index + "index.html";
    },1000);
    });

$('.topic-container .drink').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file + "drink.html";
    },1000);
});

$('.topic-container .treats').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file + "treat.html";
    },1000);
});

$('.topic-container .tools').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file + "tool.html";
    },1000);
});

$('.topic-container .room').click(function(event) {
    event.preventDefault();
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#pre-page').removeClass('pre-page-topic');
    }, 500);
    setTimeout(function () {
        window.location.href = file + "room.html";
    },1000);
});

/*****************
       Key
*****************/





/***********************************************************
                      Non-Event Function
************************************************************/




/***********************************************************
                       	   Test
************************************************************/
