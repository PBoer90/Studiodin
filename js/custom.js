// JavaScript Document

var $j = jQuery.noConflict();


var $window = $j(window);
var $bigEnough = false;
var $formfilled = false;

function checkWidth() {
	var windowsize = $window.width();
	if (windowsize > 768) {
		$bigEnough = true
	}
};

function filterMenu() {
	var windowsize = $window.width();
	if (windowsize < 550) {
		$j(".optionset").addClass("optionset_mobile");
	}
};

$j(function(){

	function setCookie(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (30 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        	};

        	function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        	};

    filterMenu();
	
    $j(document).ready (function() {

    	if (getCookie('verborgenToegang') == 1) {
    		$j(".blurred").toggleClass("blurred");
			$j(".unlock").remove();
    	};
		
		checkWidth();
		$j(function () {
    		var parent = $j(".grid_elements");
    		var divs = parent.children(".item");
    		while (divs.length) {
        		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    		}
		});
		
		$j('.optionset_mobile').on( 'hover', function() {
			$j(this).find("li").css({
				"display": "inline-block !important"
			});
		});
		
		// $j('.blurred').on('hover', function(){
		// 	if ($bigEnough == true) {
		// 	$j( this ).find('.unlock').css({
		// 		"visibility": "visible"
		// 	});
		// 	}
		// });

		// $j('.blurred').on('mouseleave', function(){
		// 	if ($bigEnough == true) {
		// 	$j( this ).find('.unlock').css({
		// 		"visibility": "hidden"
		// 	});
		// 	}
		// });

		$j('.unlock_button').on('click', function(){
			$j('.unlock_overlay').css({
				"display": "initial",
				"opacity": "1"
			});
		});

		// $j('.blurred').on('click', function(evt){
		// 	if ($formfilled != true) {
		// 		//event.preventDefault();
		// 	};
		// });



		$j('.portfolio_item_img').on( 'hover', function() {
			var TooltipWidth = $j(document).find('.portfolio_item_img').width() - 10;

			if ($bigEnough == true) {
			$j( this ).find('.tooltip').css({
				"visibility": "visible",
				"height": "auto",
				"opacity": "1",
				"pointer-events": "none",
				"width": TooltipWidth
				});
			var tooltipheight = $j( this ).find('.tooltip').height() + 17;
			$j( this ).find(".port_icons").css({
				"visibility": "visible",
				"opacity": "1",
				"bottom" : tooltipheight,
				"transition-property": "all",
				"transition-duration": ".4s"
				});
			}
			
		});
		
		$j('.portfolio_item_img').on( 'mouseleave', function() {
			if ($bigEnough == true) {
			$j( this ).find(".tooltip").css({
				"visibility": "hidden",
				"height": "0",
				"opacity": "0"
				});
			}
		});
		$j('.portfolio_item_img').on( 'mouseleave', function() {
			if ($bigEnough == true) {
			$j( this ).find(".port_icons").css({
				"visibility": "hidden",
				"opacity": "0",
				"bottom": "0",
				"transition-property": "all",
				"transition-duration": "0s"
				});
			}
		});
		
		$j('.portfolio_item_img').on( 'hover', function() {
			if ($bigEnough == true) {
			$j('.quote_overlay').css({
				"opacity": "0",
				"transform": "opacity 0.5s",
				"-webkit-transition": "opacity 0.5s"
			});
			}
		});
		/*$j('.portfolio_item_img').on( 'mouseleave', function() {
			$j('.quote_overlay').css({
				"opacity": "1",
				"transform": "opacity 0.6s",
				"-webkit-transition": "opacity 0.6s"
			});
		});*/
		
		$j('.ip').on( 'hover', function() {
			if ($bigEnough == true) {
			$j( this ).find('.meta_body').css({
				"opacity": "1"
				});
			}
		});
		
		$j('.ip').on( 'mouseleave', function() {
			if ($bigEnough == true) {
			$j( this ).find(".meta_body").css({
				"opacity": "0"
				});
			}
		});
		
		$j('.portfolio_item_img img').on( 'hover', function() {
			if ($bigEnough == true) {
			$j( this ).addClass("zoom");
			}
		});
		
		$j('.portfolio_item_img img').on('mouseleave', function() {
			if ($bigEnough == true) {
			$j( this ).removeClass("zoom");
			}
		});
		
		$j('.port_icons').on('hover', function() {
			if ($bigEnough == true) {
			$j( this ).parents('.portfolio_item_img').find('img').addClass("zoom");
			}
		});

		$j('.unlock_form').submit(function(event){
			
			//event.preventDefault();
 
			var validate = validateForm();

			if (validate == true) {

				$j.ajax({
			        type    : 'POST',
				    url     : 'wp-content/themes/gt3-wp-pure/core/plugins/gt3-pagebuilder/core/shortcodes/includes/send.php',
				    data    : $j(this).serialize(),
				    cache   : false,
				    dataType: 'text',
				    //success : function (serverResponse) { alert('mail sent successfully.'); },
				    //error   : function (jqXHR, textStatus, errorThrown) {alert('error sending mail');}
			    });

				$j(this).css( {
					"display": "none"
				});
				$j(".blurred").toggleClass("blurred");
				$j(".unlock").remove();

				//$formfilled = true

				setCookie('verborgenToegang','1');

				$j('.unlock_overlay').css( {
				"display": "none"
				}); 
				//event.preventDefault();
			} else {
				//event.preventDefault();
			}
					
		});

		function validateForm() {
			  var email = document.forms["unlock_form"]["email"].value;
			  if (email == null || email == "") {
			        $j('#email').css("background", "#ffced1");
			        return false;
			  } else {
			  	return true;
			  	$j(this).trigger(event);
			  };
		};

		// $j('.unlock_overlay').on('click', function(){
		// 	$j( this ).css({
		// 		"display": "none",
		// 		"opacity": "0"
		// 	});
		// });

		$j(document).keyup(function(e) {
    		if (e.which == 27) {
        $j(".unlock_overlay").fadeOut(300); 
    	}
		});

		
	var nav = $j('#menu-top-menu-1');
	var navHomeY = nav.offset().top;
	var isFixed = false;
	var $w = $j(window);
	
	$w.scroll(function() {
		var scrollTop = $w.scrollTop();
		var shouldBeFixed = scrollTop > navHomeY;
		if (shouldBeFixed && !isFixed) {
			nav.css({
				position: 'fixed',
				top: 0,
				left: nav.offset().left,
				width: nav.width(),
				"margin-top": "-2px",
				"z-index": 9999,
				"background-color": "#fff"
			});
			isFixed = true;
		} else if (!shouldBeFixed && isFixed)
		{
			nav.removeAttr('style');
			isFixed = false;
		}
	});
	
		
	});
	
	

});