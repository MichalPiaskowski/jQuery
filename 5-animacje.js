// $('#naglowek-1').hide(3000);
// $('#naglowek-1').show(3000);

// $('#naglowek-1').fadeOut(3000);
// $('#naglowek-1').fadeIn(3000);

// $('#naglowek-1').slideUp(3000);
// $('#naglowek-1').slideDown(3000);

let naglowek2 = $('#naglowek-2');


function customAnimate2() {
    // console.log('koniec 1. animacji! Za chwilę druga :)');
    naglowek2.animate({
        fontSize: '2em',
        marginLeft: '0'
    }, 2000, customAnimate1);
}

function customAnimate1() {
    naglowek2.animate({
        fontSize: '4em',
        marginLeft: '200px',
    }, 2000, customAnimate2);
}

customAnimate1();