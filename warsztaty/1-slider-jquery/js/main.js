let nextSlide = $('.next-slide');
let prevSlide = $('.prev-slide');
let singleSlide = $('.single-slide');
let slideShow = $('.slide-show');
let globalCounter = 0;
let proportionSlide = 100 / singleSlide.length;

slideShow.css({
    'width': singleSlide.length * 100 + "%"
});

singleSlide.css({
    'width': proportionSlide + "%"
});

singleSlide.each(function (index, element) {
    $(element).css('margin-left', proportionSlide * index + "%");
})


prevSlide.click(function () {
    // console.log('działa');
    slide(globalCounter - 1);
});

nextSlide.click(function () {
    // console.log('działa');
    slide(globalCounter + 1);
});

function slide(counter) {
    // console.log(counter);
    if (counter < 0 || counter >= singleSlide.length) {
        return
    }

    let slideCaption = slideShow.find('.slide-caption').eq(counter);
    slideCaption.fadeOut();

    let marginLeft = counter * (-100) + '%';

    slideShow.animate({
        marginLeft: marginLeft
    }, 1000, function () {
        slideCaption.fadeIn(1000);
        globalCounter = counter;
    })

    globalCounter = counter;
    console.log(globalCounter);
}