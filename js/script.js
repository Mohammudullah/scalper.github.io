$(function(){
    "use strict"

    //Banner slider initialization
    $('.banner-slider').slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        arrows          : true,
        nextArrow       : '.arrow .right',
        prevArrow       : '.arrow .left',
        autoplay        : true,
        speed           : 1500,
        autoplaySpeed   : 5000,
        pauseOnHover    : false,
        pauseOnFocus    : false,

    });

    //Team slider initialization
    $('.team-slider').slick({
        slidesToShow    : 4,
        slidesToScroll  : 4,
        arrows          : true,
        nextArrow       : '#team .right',
        prevArrow       : '#team .left',
        autoplay        : false,
        speed           : 1000,
        autoplaySpeed   : 5000,
        pauseOnHover    : false,
        pauseOnFocus    : false,
        responsive      : [

            {
                breakpoint  : 400,
                settings    : 
                {
                    slidesToShow    : 1,
                    slidesToScroll  : 1,
                }
            },
            {
                breakpoint  : 576,
                settings    : 
                {
                    slidesToShow    : 2,
                    slidesToScroll  : 2,
                }
            },
            {
                breakpoint  : 800,
                settings    : 
                {
                    slidesToShow    : 3,
                    slidesToScroll  : 3,
                }
            },
            {
                breakpoint  : 900,
                settings    : 
                {
                    slidesToShow    : 3,
                    slidesToScroll  : 3,
                }
            }
        ]

    });

    //Our achivment section counter-up initialization
    $('.counter').counterUp({
        delay   : 10,
        time    : 2500,
    });

    //Portfolio section venobox initialization
    $('.portfolio-lightbox').venobox({
        framewidth      : '600px',
        border          : '4px',
        bgcolor         : '#FFE600',
        closeBackground : '#FFE600',
        closeColor      : 'black',
        titleattr       : 'data-title',
        infinigall      : true,
        arrowsColor     : '#FFE600',
        share           : ['facebook', 'twitter', 'download']
    });

    // Our advantages image 3d slider by slick slider
        var img_slide = $('.image-slider');
    img_slide.on('init', function(event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');  
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');  
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var
        cur = $(slick.$slides[nextSlide]);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    var next = cur.next(),  
    prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
    });

        img_slide.slick({
        speed           : 1000,
        arrows          : true,
        focusOnSelect   : true,
        prevArrow       : '#advantages .left',
        nextArrow       : '#advantages .right',
        slidesPerRow    : 1,
        autoplay        : true,
        autoplaySpeed   : 5000,
        pauseOnHover    : false,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        centerMode      : true,
        centerPadding   : '0px',
        asNavFor        : '.info-slider',
        customPaging: function(slider, i) {
            return '';
        },
    });

    // advantages section feedback info slider
    $('.info-slider').slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        arrows          : false,
        speed           : 1000,
        pauseOnHover    : false,
        fade            : true,
        asNavFor        : '.image-slider'
    });

    // Our clients section slider
    $('.clients-slider').slick({
        slidesToShow    : 6,
        slidesToScroll  : 2,
        arrows          : false,
        speed           : 1000,
        pauseOnHover    : false,
        autoplay        : true,
        autoplaySpeed   : 5000,
        responsive      : [
            {
                breakpoint  : 450,
                settings    : 
                {
                    slidesToShow    : 2,
                    slidesToScroll  : 1, 
                }
            },
            {
                breakpoint  : 576,
                settings    : 
                {
                    slidesToShow    : 3,
                    slidesToScroll  : 1, 
                }
            },
            {
                breakpoint  : 768,
                settings    : 
                {
                    slidesToShow    : 4,
                    slidesToScroll  : 1, 
                }
            },
            {
                breakpoint  : 992,
                settings    : 
                {
                    slidesToShow    : 5,
                    slidesToScroll  : 1, 
                }
            }
        ]
    });

    //Search bar animation
    $('.navbar .search .nav-link').on('click', function (){
        $('.navbar .search-input').toggleClass('search-bar-animation');
        $('.navbar .search').toggleClass('search-animation');
        $('.navbar .search .fa').toggleClass('fa-search');
        $('.navbar .search .fa').toggleClass('fa-times');
    });

    //Navbar animation
    $(window).on('scroll', function (){
      var scrollamount = $(this).scrollTop();
      
      if (scrollamount > 50) {
          $('.navbar').addClass('navbar-animation');
      }

      else {
          $('.navbar').removeClass('navbar-animation');
      }
    });

    //Navbar toggler animation
    $('.navbar-toggler').on('click',function (){
        $(this).toggleClass('toggler-animation');
    });

    //Back to top button initialization
    $(window).on('scroll', function (){
        var scrollamount = $(this).scrollTop();

        if (scrollamount > 300) {
            $('.back-to-top').addClass('back-to-top-animation');
        }

        else if (scrollamount < 10) {
            $('.back-to-top').removeClass('back-to-top-animation');
        }
    });
    $('.back-to-top').on('click', function (){
        $('html,body').animate({scrollTop : 0}, 1000);
    });

    //Smooth scroll and scroll spy initialization
    var scrollLink = $('.scroll-link');
    scrollLink.on('click', function (){
        $('html,body').animate({scrollTop: $(this.hash).offset().top-70},700);
    });
    $(window).on('scroll', function (){
        var scrolltop = $(this).scrollTop();

        scrollLink.each(function () {
            var scrollOfset = $(this.hash).offset().top-75;

            if(scrolltop > scrollOfset) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    //Blogs page script

    //blogs-page image slider
        //blogs page image slider initialization
        $('.blogs-page-image-slider').slick({
            slidesToShow    : 1,
            slidesToScroll  : 1,
            arrows          : true,
            nextArrow       : '.arrow .right',
            prevArrow       : '.arrow .left',
            autoplay        : true,
            speed           : 1500,
            autoplaySpeed   : 5000,
            pauseOnHover    : false,
            pauseOnFocus    : false,
            asNavFor        : '.blogs-page-image-info-slider',
    
        });
        
        //blogs page image slider initialization
        $('.blogs-page-image-info-slider').slick({
            slidesToShow    : 1,
            slidesToScroll  : 1,
            arrows          : true,
            nextArrow       : '.arrow .right',
            prevArrow       : '.arrow .left',
            autoplay        : true,
            speed           : 1500,
            autoplaySpeed   : 5000,
            pauseOnHover    : false,
            pauseOnFocus    : false,
            asNavFor        : '.blogs-page-image-slider',
    
        });

        // filter gallery initialization
        var containerEl = document.querySelector('.gellery-container');
        var mixer = mixitup(containerEl);

});