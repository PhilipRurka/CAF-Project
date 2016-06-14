/***********************************************************
                         	Var
************************************************************/






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
    $('.page').addClass('page-menu');

    setTimeout(function() {
        $('.menu').addClass('display');
        }, 500);
        });

$('.cross button').click(function(event) {
    event.preventDefault();
    $('#overlay').removeClass('overlay');
    $('#pre-page').removeClass('pre-page-menu');
    $('.page').removeClass('page-menu');
    $('.menu').removeClass('display');
});

/***** Topic *****/
// $('. button').click(function(event) {
//
// });




/*****************
       Key
*****************/





/***********************************************************
                      Non-Event Function
************************************************************/




/***********************************************************
                       	   Test
************************************************************/
