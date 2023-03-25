// Carousel banner
$('.owl-carousel.carousel-1').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false
});

$('.owl-carousel.carousel-2').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    dots:false
});

$('.owl-carousel.carousel-3').owlCarousel({
    loop:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
});

var owl = $(".owl-carousel.carousel-3");
owl.owlCarousel();
$(".next").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".prev").click(function () {
    owl.trigger("prev.owl.carousel");
});

// particles
particlesJS.load('particles-js', './lib/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

// counter
var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {   
        $('.counter-value').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                //alert('finished');
                }
            });
        });
        a = 1;
    }

});

// scroll to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let nav = document.getElementById("navbar");
let sticky = nav.offsetTop;

window.addEventListener('scroll', sticker);

function sticker() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}