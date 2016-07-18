/***********************************************************
                         	Var
************************************************************/

var fileLocal = "file:///Users/philiprurka/Documents/Dev/Sub-Projects/CAF/CAF-Project/pages/";

var fileGh = "http://philiprurka.github.io/CAF-Project/pages/";



/***********************************************************
                      Append + CSS + Hide
************************************************************/





/***********************************************************
                       Event Function
************************************************************/






/*****************
      Mouse
*****************/

/***** Outline Hack part 1/2 *****/
$('button').each(function() {
	$(this).click(function(event) {
		$('#outline a').focus();
	});
});
/***** Outline Hack part 1/2 *****/

$('.cross button').click(function(event) {
    event.preventDefault();
    menuCrossFunc();
});

/***** Menu *****/
$('.threeway button').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#page-wrap').addClass('page-wrap-menu');

    setTimeout(function() {
        $('.site-navigation').fadeIn(500);
    }, 500);
});

$('#overlay').click(function(event) {
    event.preventDefault();
    menuCrossFunc()
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

/***** Topic-List *****/
$('.topic-navigation .food').click(function(event) {

    event.preventDefault();
    overlayTransitionRemoveFunc();
    wrapperFadeOutFunc();
    changeUrlFunc('../food.html');
    });

$('.topic-navigation .drink').click(function(event) {

    event.preventDefault();
    overlayTransitionRemoveFunc();
    wrapperFadeOutFunc();
    changeUrlFunc('drink.html');
});

$('.topic-navigation .treat').click(function(event) {

    event.preventDefault();
    overlayTransitionRemoveFunc();
    wrapperFadeOutFunc();
    changeUrlFunc('treat.html');
});

$('.topic-navigation .tool').click(function(event) {

    event.preventDefault();
    overlayTransitionRemoveFunc();
    wrapperFadeOutFunc();
    changeUrlFunc("tool.html");
});

$('.topic-navigation .room').click(function(event) {

    event.preventDefault();
    overlayTransitionRemoveFunc();
    wrapperFadeOutFunc();
    changeUrlFunc("room.html");
});

/*****************
       Key
*****************/


$(document).keyup(function(event) {
     if (event.keyCode == 27) {
        menuCrossFunc();
    }
});


/***********************************************************
                      Non-Event Function
************************************************************/

loadFadeInFunc();

/***** Outline Hack part 2/2 *****/
$('a, button').each(function(){
	$(this).addClass('outline-hover');
});
/***** Outline Hack part 2/2 *****/

function overlayTransitionRemoveFunc() {
    $('.topic-list').fadeOut(500);
    setTimeout(function () {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-topic');
    }, 500);
};

function menuCrossFunc() {
    $('.site-navigation').fadeOut(500);
    $('.topic-list').fadeOut(500);
    setTimeout(function() {
        $('#overlay').removeClass('overlay');
        $('#page-wrap').removeClass('page-wrap-menu');
        $('#page-wrap').removeClass('page-wrap-topic');
        // window.scrollto(0,0);
    }, 500);
}

function loadFadeInFunc() {
    $('.wrapper').fadeIn(500);
}

function wrapperFadeOutFunc() {
    setTimeout(function () {
        $('.wrapper').fadeOut(500);
    }, 1000);
};

function changeUrlFunc(page) {
    setTimeout(function () {
        // window.location.href = fileLocal + page;
        window.location.href = fileGh + page;
    },1500);
};


/***********************************************************
                       	   Test
************************************************************/
