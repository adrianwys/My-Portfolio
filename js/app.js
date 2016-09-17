$(document).ready(function() {
    // mobile menu
    var hamButton = $('.ham-button');
    var headerDiv = $('.header-div');
    hamButton.on('click', function(){
        headerDiv.toggleClass('nav-open');

        navItems.each(function(index, value){
            $(this).on('click', function(){
                headerDiv.removeClass('nav-open');
             });
        });
    });
    // scrolling to section about
    var button = $('.scrollButton');
    var aboutSection = $('#about');
    button.on('click', function(ev) {
        var aboutPosition = aboutSection.offset().top;
            $('html, body').animate({
                  scrollTop: aboutPosition
              }, 1200);
          });
    //scrolling between sections
    var navItems = $('li').find('a');

    navItems.each(function(index, value){
        $(this).on('click', function(){
                var sectionPosition = $(this).attr('href');
                $('html, body').animate({
                         scrollTop: $(sectionPosition).offset().top

                     }, 800);
                 });
             });
    // front-end animation
    var mainTitle = $('h2');
    var avatar = $('.avatar');
    mainTitle.animate({
        opacity:1
    },5000);

    avatar.animate({
        opacity:1
    },5000);
    // changing background in the header section
    var singlePage = {
           imagesArr: ['rsz_head', '01', '02'],
           init: function() {
               singlePage.animateBannerImg();
           },
           animateBannerImg: function() {
               var img = singlePage.imagesArr.shift();
               singlePage.imagesArr.push(img);
               $('header').css({
                   'background': 'url("images/' + img + '.jpg")',
                   'background-repeat': 'no-repeat',
                   'background-size': 'cover',
                   'background-position': 'center',
                    'background-attachment': 'fixed'

               });
               setTimeout(singlePage.animateBannerImg, 6000);
           }
       };

    singlePage.init();
    // gallery
    var projects= $('.project');
    var body= $('body');

    projects.each(function(index, value){
        $(this).on('click', function(){
            var images = $(this).find('img').attr('id');
            var bigWindow = $('<div>');
            var galleryWindow = $('<div>');
            var img = $('<img>');
            var close = $('<div class="close">');
            //grey background
            bigWindow.css('width', '100vw').css('height', '100vh').css('margin','auto').css('background-color','rgba(32, 33, 33, 0.9)').css('position','fixed').css('z-index','2').css('top','0');

            if ($(window).width() <= 767) {
                //div with bigger picture
                galleryWindow.css('width', '300px').css('height', '480px').css('margin','0 auto').css('position','relative').css('top','20px').css('border','2px solid white');
                //obrazek w divie
                img.attr('src', images).css('width','296px').css('height', '476px');
            }
            else if ($(window).width() > 767 && $(window).width() <= 1023) {
            //div with bigger picture
                galleryWindow.css('width', '350px').css('height', '530px').css('margin','0 auto').css('position','relative').css('top','20px').css('border','2px solid white');
                //obrazek w divie
                img.attr('src', images).css('width','346px').css('height', '526px');

            }
            else if ($(window).width() > 1023 && $(window).width() <= 1223) {
            //div with bigger picture
                galleryWindow.css('width', '400px').css('height', '580px').css('margin','0 auto').css('position','relative').css('top','20px').css('border','2px solid white');
                //obrazek w divie
                img.attr('src', images).css('width','396px').css('height', '576px');
            }
            else  {
                    //div with bigger picture
                galleryWindow.css('width', '550px').css('height', '830px').css('margin','0 auto').css('position','relative').css('top','20px').css('border','2px solid white');
                //picture in div
                img.attr('src', images).css('width','546px').css('height', '826px');
            }
            //close button
           close.text('close');
           close.css('color','white').css('border','1px solid white').css('text-align','center').css('margin','40px auto').css('width','100px').css('cursor','pointer');
           //wprowadzenie elementow do DOM
             body.append(bigWindow);
             bigWindow.append(galleryWindow);
             galleryWindow.append(img);
             bigWindow.append(close);
             //close closer view
             bigWindow.on('click','div.close', function(){
                 $(this).parent().remove();
             });
        });
    });
    // scroll animations
    $(window).scroll(function() {
            var windowWidth = $(this).width();
            var windowScrollTop = $(this).scrollTop();
            //section about animation
            var aboutAnimation = function(){
                if (windowWidth  > 1223){
                      $('.school').delay(300).animate({opacity:1, top:0}, 500, function(){

                      });
                      $('.hobby').delay(600).animate({opacity:1, top:-150}, 500, function(){

                      });
                      $('.resume').delay(900).animate({opacity:1, top:0}, 500, function(){

                      });
                  }
              };
            //section skills animation
            var skillsAnimation = function(){
                if (windowWidth  > 1223){
                          $('.shields-container').delay(300).animate({opacity:1}, 500, function(){

                    });
                }
            };
            // gallery animation
            var galleryAnimation = function(){
                if (windowWidth  > 1223) {
                    $('.project1').delay(300).animate({opacity:1, left:100}, 500, function(){
                    });
                    $('.project2').delay(900).animate({opacity:1, top:0}, 500, function(){
                    });
                    $('.project3').delay(600).animate({opacity:1, right:100}, 500, function(){
                    });
                }
            };
                // contact animation
            var contactAnimation = function(){

                    $('.phone-section').delay(300).animate({opacity:1}, 500, function(){

                    });
                    $('.mail-section').delay(600).animate({opacity:1}, 500, function(){

                     });
                    $('.skype-section').delay(900).animate({opacity:1}, 500, function(){

                    });

                };
                // functions call

             if (windowWidth  > 1223) {
                    if(windowScrollTop>500){
                        aboutAnimation();
                    }

                    if(windowScrollTop>1400){
                        skillsAnimation();
                    }
                    if(windowScrollTop>2300){
                        galleryAnimation();
                    }
                    if(windowScrollTop>3000){
                        contactAnimation();
                    }
                }
            });
        });
