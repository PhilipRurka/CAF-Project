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

$('.threeway button').click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('overlay');
    $('#pre-page').addClass('pre-page');
    $('.menu').addClass('display');
});

$('.cross button').click(function(event) {
    event.preventDefault();
    $('#overlay').removeClass('overlay');
    $('#pre-page').removeClass('pre-page');
    $('.menu').removeClass('display');
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
