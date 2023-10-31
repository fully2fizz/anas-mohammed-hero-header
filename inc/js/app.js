// ==========================================
// ================= Navbar ================= 
// ==========================================
$(document).ready(function(){
    $('.menu-toggle').click(function() {
        if($('.menu').hasClass("-open")){
            TweenMax.to([".menu-backdrop"], 1,{autoAlpha:0});
            TweenMax.to([".menu-content"], 1,{x:'100%'});
            TweenMax.to([".menu-body"], 1,{x:'100%',autoAlpha:0});
            TweenMax.to([".menu-footer"], 1,{x:'100%',autoAlpha:0});
        }
        else {
            TweenMax.to([".menu-backdrop"], 1,{autoAlpha:1});
            TweenMax.to([".menu-content"], 1,{x:'0%'});
            TweenMax.to([".menu-body"], 1,{x:'0%',autoAlpha:1});
            TweenMax.to([".menu-footer"], 1,{x:'0%',autoAlpha:1});
            $('.menu-box').css("display","block");
        }
    });
    $(".menu-toggle").click(function(){
        $('.menu').toggleClass("-open");
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        return document.querySelector('.menu').classList.add('active')
    }
    return document.querySelector('.menu').classList.remove('active')
});

// ====>Banner image <==== //
gsap.registerPlugin(ScrollTrigger);
  TweenMax.from(".img-one", 2, {
    x: 0,
    y:170,
    opacity:0,
    ease: Expo.easeInOut
    });
  TweenMax.from(".img-two", 2.5, {
    delay: 0.4,
    x: 0,
    y:200,
    opacity:0,
    ease: Expo.easeInOut
    });
  TweenMax.from(".img-three", 2.8, {
    delay: 0.6,
    x: 0,
    y:200,
    opacity:0,
    ease: Expo.easeInOut
    });
    TweenMax.from(".img-four", 2.9, {
    delay: 0.8,
    x: 0,
    y:200,
    opacity:0,
    ease: Expo.easeInOut
    });
    TweenMax.from(".img-five", 3, {
    delay: 0.9,
    x: 0,
    y:200,
    opacity:0,
    ease: Expo.easeInOut
    });