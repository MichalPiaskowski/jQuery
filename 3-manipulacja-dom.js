$(function () {
    // let paragrafy = $('p');

    // paragrafy.text('Nowy text!')
    // console.log(paragrafy.text());
    // $('span').html('<a href="#">Nowy link</a>');

    // $('span').prepend('Prependujemy tekst! ');
    // $('span').append(' Appendujemy tekst!');

    // $('span').before('<p>Beforujemy tekst!</p>');
    // $('span').after('<p>afterujemy tekst!</p>');

    // $('#naglowek-1').empty();
    // $('#naglowek-1').remove();

    $('#naglowek-1').css('background-color', 'yellow');
    $('#naglowek-2').css({
        color: 'red',
        textDecoration: 'underline'
    });

    $('input#input-value').val('Tadaaam');
    $('#par-container').find('.paragraf').css('background-color', 'red');

    // $('p').each(function (index, element) {
    //     console.log($(this));
    //     console.log(`Element` + index + ':' + $(element).text());
    // })

})