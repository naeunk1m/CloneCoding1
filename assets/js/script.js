$(function(){

      $('#btnTrans').click(function() {
        const url = $('#select-trans').val();
        window.open(url);
      });
      
      // 주요뉴스 시민참여 
      
      const visualSlide = new Swiper(".sc-visual .swiper", { 
        loop:true,
        pagination: {
          el: " .fraction",
          type : "fraction", 
        },
        
        navigation: {
          nextEl: " .next",
          prevEl: " .prev",
        },
        
        autoplay: {
          delay: 1000,  
          disableOnInteraction: false,
        },
        on:{
          "slideChange":function() {
            if(this.realIndex >= $('.sc-visual .nav-area .citizen').data('idx')) {
              $('.sc-visual .nav-area .citizen').addClass('active').siblings().removeClass('active');
            } else {
              $('.sc-visual .nav-area .news').addClass('active').siblings().removeClass('active');
            }
          }
        }
      });

      $('.sc-visual .nav-area .btn-nav').click(function() {
        idx=$(this).data('idx');
        $(this).addClass('active').siblings().removeClass('active');
        visualSlide.slideToLoop(idx)
      })
      
      $('.sc-visual .control-area .autoplay').click(function() {
        if($(this).hasClass('active')) {
          visualSlide.autoplay.start();
        } else {
          visualSlide.autoplay.stop();

        }
        $(this).toggleClass('active')
      })



      // $('.visual-area').click(function(e) {
      //   e.preventDefault();
        
      //   const groupVisual = $(this).parents('.group-visual');
      //   groupVisual.addClass('active').siblings().removeClass('active');
        
      //   const isVisualNews = groupVisual.hasClass('visual-news');
        
      //   if (isVisualNews) {
      //     visualCitizen.autoplay.stop();
          
      //     if (!$('.visual-news .autoplay').hasClass('active')) {
      //       visualNews.autoplay.start();
      //     }
      //   } else {
      //     visualNews.autoplay.stop();
          
      //     if (!$('.visual-citizen .autoplay').hasClass('active')) {
      //       visualCitizen.autoplay.start();
      //     }
      //   }
      // });

      // visualCitizen.autoplay.stop();

      // 주요뉴스 시민참여 

      // 배너
      
      const moveBanner = new Swiper(".sc-move .swiper", {
        slidesPerView: 3,
        spaceBetween: 43,

        pagination: {
          el: ".sc-move .fraction",
          type: "fraction",
        },

        navigation: {
          nextEl: ".sc-move .next",
          prevEl: ".sc-move .prev",
        },

        autoplay: {
          delay: 2000, 
          disableOnInteraction: false,
        }
      });

      $('.sc-move .autoplay').click(function(e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
          moveBanner.autoplay.stop();
          $(this).addClass('active');
        } else {
          moveBanner.autoplay.start();
          $(this).removeClass('active');
        }
      });     
      
      // 배너
    
      // 토글
    
      $('.sc-related .btn-more').click(function(e) {

        if(!$(this).hasClass('none')) {
          e.preventDefault();
  
          if ($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.tab-area').slideUp();
          } else {
            $('.btn-more').removeClass('active').siblings('.tab-area').slideUp();
  
            $(this).addClass('active').siblings('.tab-area').slideDown();
          }
        }
      });

      $('.tab-area li:first-child a').keydown(function(e) {
        if (e.keyCode === 9 && e.shiftKey) {
          $('.tab-area').slideUp();
          $('.btn-more').removeClass('active');
        }
      });

      $('.tab-area .tab-item:last-child a').keydown(function(e) {
        if (e.keyCode === 9 && !e.shiftKey) {
          $('.tab-area').slideUp();
          $('.btn-more').removeClass('active');
        }
      });


      $(document).click(function(e){
        if($('sc-related').has(e.target).length === 0) {
          $('.tab-area').slideUp();
          $('.btn-more').removeClass('active');
        }
      })

      // 토글


      $(window).scroll(function(){
        curr=$(this).scrollTop();
        if(curr >= 50) {
          $('.front-btn').addClass('show')
        } else {
          $('.front-btn').removeClass('show')
        }
      })
      
      $('.front-btn').click(function(e) {
        e.preventDefault();
        window.scrollTo({top:0, behavior:"smooth"})
      })


    });