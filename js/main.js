$(document).ready(function () {

    //-----------------------------------------------------------------------------------
    //	iphone/pad test
    //-----------------------------------------------------------------------------------  

    function isiPhone() {

        return (
        (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) || (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) || (navigator.userAgent.toLowerCase().indexOf("ipod") > -1));

    }

    var isVisible = false;

    $('#logo').click(function () {

        return false;
    });
    $('#logoanimation').click(function () {

        return false;
    });

    $('#notifications').show();



    if (!isiPhone()) {

        $("[data-toggle^=popover]")
            .popover({
            trigger: 'hover',
            animation: false
        });




    } else {

        var hideAllPopovers = function () {

            $('[data-toggle$=ipad]').each(function () {
                $(this).popover('hide');
            });



        };

        $("[data-toggle$=ipad]").popover({

            trigger: 'manual',
            animation: false
        }).on('touchend', function (e) {




            if ($(this).next('div.popover:visible').length) {
                $(this).popover('hide');

                isVisible = false;



            } else if (isVisible) {

                hideAllPopovers();
                isVisible = false;


                $(this).popover('show');
                isVisible = true;



                $("[data-toggle$=ipad]").on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();

            } else {

                $(this).popover('show');
                isVisible = true;



                $("[data-toggle$=ipad]").on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();
            };

        });

        $("[data-toggle$=ipad] a").click(function () {

            return false;
        });





        $("#nc").on('touchend', function (e) {

            if ($('#notificationcenter').next('div.popover:visible').length) {
                $('#notificationcenter').popover('hide');

                isVisible = false;



            } else if (isVisible) {

                hideAllPopovers();
                isVisible = false;


                $('#notificationcenter').popover('show');
                isVisible = true;



                $('#notificationcenter').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();

            } else {

                $('#notificationcenter').popover('show');
                isVisible = true;



                $('#notificationcenter').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();
            };
        });



        $("#nc a").click(function () {

            return false;
        });
        $("#rec a").click(function () {

            return false;
        });
        $("#fav a").click(function () {

            return false;
        });
        $("#play a").click(function () {

            return false;
        });
		
		$("#keys a").click(function () {

            return false;
        });



        $("#play").on('touchend', function (e) {




            if ($('#station').next('div.popover:visible').length) {
                $('#station').popover('hide');

                isVisible = false;



            } else if (isVisible) {

                hideAllPopovers();
                isVisible = false;


                $('#station').popover('show');
                isVisible = true;



                $('#station').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();

            } else {

                $('#station').popover('show');
                isVisible = true;



                $('#station').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();
            };

        });
		
			

		$("#keys").on('touchend', function (e) {
			
			 $("#nav-keys").trigger('click');


        });




        $("#fav").on('touchend', function (e) {




            if ($('#favs').next('div.popover:visible').length) {
                $('#favs').popover('hide');

                isVisible = false;



            } else if (isVisible) {

                hideAllPopovers();
                isVisible = false;


                $('#favs').popover('show');
                isVisible = true;



                $('#favs').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();

            } else {

                $('#favs').popover('show');
                isVisible = true;



                $('#favs').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();
            };

        });
        $("#rec").on('touchend', function (e) {




            if ($('#recs').next('div.popover:visible').length) {
                $('#recs').popover('hide');

                isVisible = false;



            } else if (isVisible) {

                hideAllPopovers();
                isVisible = false;


                $('#recs').popover('show');
                isVisible = true;



                $('#recs').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();

            } else {

                $('#recs').popover('show');
                isVisible = true;



                $('#recs').on('touchend', function (e) {

                    e.stopPropagation();
                });



                e.stopPropagation();
            };

        });

        $(document).on('touchend', function (e) {

            hideAllPopovers();
            isVisible = false;

        });

    }


    $('#radioicon').click(function () {
        $('#radioapp').toggle();

        if ($('#notificationcenter').not('.nonotes')) {
            $('#desktop').removeClass('open');
            $('#notifications').removeClass('open');
            $('#notificationcenter').addClass('nonotes');
        }
        return false;
    });

    if (!isiPhone()) {

        $('#notificationcenter').click(function () {

            if ($(this).hasClass('nonotes')) {


                if ($(this).next('div.popover:visible').length) {
                    $("#notificationcenter").popover('hide');
                }
                if ($('#radioapp').is(':visible')) {
                    $('#radioapp').addClass('wasvisible').hide();
                }

                $('#desktop').addClass('open');
                $('#notifications').addClass('open');
                $(this).removeClass('nonotes');

            } else {

                if ($(this).next('div.popover:visible').length) {
                    $("#notificationcenter").popover('hide');
                }
                $('#desktop').removeClass('open');
                $(this).addClass('nonotes');

                if ($('#radioapp').hasClass('wasvisible')) {
                    $('#radioapp').removeClass('wasvisible').delay(170).show(0);
                }


            }
            return false;


        });
    } else {
        $('#notificationcenter').on('touchend', function () {

            if ($(this).hasClass('nonotes')) {


                if ($(this).next('div.popover:visible').length) {

                    if (isVisible) {

                        hideAllPopovers();
                        isVisible = false;
                    }
                }
                if ($('#radioapp').is(':visible')) {
                    $('#radioapp').addClass('wasvisible').hide();
                }

                $('#desktop').addClass('open');
                $('#notifications').addClass('open');
                $(this).removeClass('nonotes');

            } else {

                if ($(this).next('div.popover:visible').length) {

                    if (isVisible) {

                        hideAllPopovers();
                        isVisible = false;
                    }

                }
                $('#desktop').removeClass('open');
                $(this).addClass('nonotes');

                if ($('#radioapp').hasClass('wasvisible')) {
                    $('#radioapp').removeClass('wasvisible').delay(170).show(0);
                }


            }
            return false;


        });




    }

    if (!isiPhone()) {
        $('#nc').click(function () {

            if ($('#notificationcenter').hasClass('nonotes')) {

                if ($('#radioapp').is(':visible')) {
                    $('#radioapp').addClass('wasvisible').hide();
                }
                if ($('#notificationcenter').next('div.popover:visible').length) {
                    $("#notificationcenter").popover('hide');
                }

                $('#desktop').addClass('open');
                $('#notifications').addClass('open');
                $('#notificationcenter').removeClass('nonotes');
                return false;
            } else {
                if ($('#notificationcenter').next('div.popover:visible').length) {
                    $("#notificationcenter").popover('hide');
                }
                $('#desktop').removeClass('open');

                $('#notificationcenter').addClass('nonotes');

                if ($('#radioapp').hasClass('wasvisible')) {
                    $('#radioapp').removeClass('wasvisible').delay(170).show(0);
                }
                return false;

            }


        });

    }





    $('#quit').click(function () {
        $('#radioapp').hide();
    });


    if (!isiPhone()) {

        $("#play").on({
            mouseenter: function () {
                $("#station").popover('show');
            },
            mouseleave: function () {
                $("#station").popover('hide');
            }
        });
		$("#stat").on({
            mouseenter: function () {
                $("#stations2").popover('show');
            },
            mouseleave: function () {
                $("#stations2").popover('hide');
            }
        });
		$("#keys").on({
            mouseenter: function () {
                $("#buttons").popover('show');
            },
            mouseleave: function () {
                $("#buttons").popover('hide');
            }
        });
        $("#fav").on({
            mouseenter: function () {
                $("#favs").popover('show');
            },
            mouseleave: function () {
                $("#favs").popover('hide');
            }
        });
        $("#rec").on({
            mouseenter: function () {
                $("#recs").popover('show');
            },
            mouseleave: function () {
                $("#recs").popover('hide');
            }
        });


        $("#nc").on({
            mouseenter: function () {
                $("#notificationcenter").popover('show');
            },
            mouseleave: function () {
                $("#notificationcenter").popover('hide');
            }
        });
		
		$("#keys").click(function () {
           $("#nav-keys").trigger('click');
		   return false;
        });
		
    }







    $('#logo img').hover(function () {
        $('h1').addClass('hover');
    }, function () {
        $('h1').removeClass('hover');
    });
    //$('h1').hover(function() { $('h1').addClass('hover');}, function() { $('h1').removeClass('hover');});
    $('#logo img').click(function () {
        $('h1').toggleClass('hovertouch');
    });

    $('#navbar ul').onePageNav();

	 $('#oldbrowsers').click(function () {
        $(this).fadeOut(300);
    });







    //-----------------------------------------------------------------------------------
    //	Clock
    //-----------------------------------------------------------------------------------


    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#DateAbbr').html(dayNames[newDate.getDay()].substr(0, 3) + " ");

    setInterval(function () {
        var seconds = new Date().getSeconds();
        $(".sec, .secs").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);


    setInterval(function () {
        var minutes = new Date().getMinutes();
        $(".min, .mins").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function () {
        var hours = new Date().getHours();
        $(".hours, .hour").html((hours < 10 ? "0" : "") + hours);
    }, 1000);




    //-----------------------------------------------------------------------------------
    //	Twitter
    //-----------------------------------------------------------------------------------

    jQuery(function ($) {
        $(".tweet").tweet({
            avatar_size: 32,
            count: 10,
            username: "radioformac",
            template: "{text} {retweet_action}"
        });
    }).bind("loaded", function () {
        $(this).find("a.tweet_action").click(function (ev) {
            window.open(this.href, "Retweet",
                'menubar=0,resizable=0,width=550,height=420,top=200,left=400');
            ev.preventDefault();
        });
    });
	
	 //-----------------------------------------------------------------------------------
    //	Secondary carousel indicators
    //-----------------------------------------------------------------------------------

	$('[data-toggle=modal]').click(function () {
		setTimeout(function(){  
				var slidewhenopened = $('small.carousel-indicators span.active').attr('data-slide-to');
				$('#indicatoricons li').removeClass('active');
				$('#indicatoricons [data-slide-to=' + slidewhenopened + ']').addClass('active');
				
		}, 100);
	
	});
	
		
	$('small.carousel-indicators span').click(function () {
		var to_slide = $(this).attr('data-slide-to')
		$('small.carousel-indicators span').removeClass('active');
		$('small.carousel-indicators span[data-slide-to=' + to_slide + ']').addClass('active');
	});
	
	
	$('#myCarousel').bind('slid', function() {
	setTimeout(function(){  	
			var current_slide = $('#indicatoricons li.active').attr('data-slide-to');
			$('small.carousel-indicators span').removeClass('active');
			$('small.carousel-indicators span[data-slide-to=' + current_slide + ']').addClass('active');
		}, 50);
	});
	
	
	$(document).keydown(function(event) {
		
  		if (typeof event !== 'undefined' && $('#myModal').is(':visible')) {
			
			if (event.keyCode == '39') {
				$('a.carousel-control.right').trigger('click');
			}
		
			if (event.keyCode == '37') {
				$('a.carousel-control.left').trigger('click');
			}
		}
		return true;
	});
	
	
	
	
	
	jQuery(function ($) {
 		var hash = window.location.hash.split('#')[1];
		var target = window.location.hash
		$.scrollTo(target, 1000,  {offset:-10});
 		$('div[id="'+hash+'"] div.accordion-body').collapse('show');
	});
	
	
	

});


//-----------------------------------------------------------------------------------
//	IE10 test
//-----------------------------------------------------------------------------------  

if (Function('/*@cc_on return document.documentMode===10@*/')()) {
    document.documentElement.className += ' ie10';
}