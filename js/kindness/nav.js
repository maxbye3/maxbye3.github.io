		/*
		* GO TO
		* On click go to a different part of the page
		* Adjusts CSS on nav buttpm
		* @param - STRING where - where on the page to go too
		*/
		function goTo(where){
			$('body').attr('scrolling','false');				
			if(where == 'road'){
				$('html,body').animate({
					scrollTop : $('.roadmapSection').offset().top - 50
				}, 700);
			}
			else if(where == 'what'){
				$('html,body').animate({
					scrollTop : 0
				}, 700);
				$('.titleContainer').show();
				$('header p span').css('color','white');
				$('header').css({'position':'relative','height':'35vh'});					
			}
			else{
				$('html,body').animate({
					scrollTop : $('.' + where + 'Section').offset().top - $('header').height()
				}, 700);
			}
			
			defaultCSS();
			selectCSS(where);
	
			
			setTimeout(function(){
				$('body').attr('scrolling','true');
			}, 700);	
		}

		/*
		* SELECT CSS 
		* Adjusts the nav bar button css 
		* So you know what section is being navigated or been clicked too
		* @param - STRING btn - the nav button that is being styled
		*/
		function selectCSS(btn){
			$('header p span').css('color','black');
			$('.' + btn + ' a img').addClass('selected');
			$('.' + btn + ' p').css('font-weight','bold');
			$('.titleContainer').hide();					
			$('header').css({'position':'fixed','height':'auto'});
		}
		/*
		* DEFAULT CSS
		* Clears all styling on nav buttons
		*/
		function defaultCSS(){
			$('.what a img, .work a img, .road a img, .question a img').removeClass('selected');
			$('.what p, .work p, .road p, .question p').css('font-weight','normal');	
		}
				
		/*
		* DISLOCATE NAVBAR
		* When scroll dislocate the header (make it fixed)
		* If scroll is 0 then remove fixed
		*/
			$( window).scroll(function() {	
				
				// console.log($(window).scrollTop());
				if($(window).scrollTop() != 0){                    
					$('.titleContainer').hide();
					$('header p span').css('color','black');
                    $('header').css({'position':'fixed','height':'auto'});
                }
                else{
					$('.titleContainer').show();
					$('header p span').css('color','white');
					$('header').css({'position':'relative','height':'35vh'});					
                }
				
				if($('body').attr('scrolling') == 'false'){
					return;
				}
				else{
					console.log('PROBLEM')
				}
				var roadmapSection = $('.roadmapSection').offset().top - $('header').height();;
				var questionSection = $('.questionSection').offset().top - $('header').height();
				var workSection = $('.workSection').offset().top - $('header').height();
				var bottomOfScreen = $(window).scrollTop() + $(window).height() > $(document).height();

				defaultCSS();

				if($(window).scrollTop() >= workSection || bottomOfScreen){
					selectCSS('work');
				}
				else if($(window).scrollTop() >= questionSection){
					selectCSS('question');
				}
				else if($(window).scrollTop() >= roadmapSection){
					selectCSS('road');
				}

				
			});
    /* position: fixed; */
    /* width: 100%; */
    /* padding: 0 20%; */