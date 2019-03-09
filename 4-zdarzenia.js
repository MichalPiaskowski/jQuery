$('#naglowek-1').on({
    'click': function () {
        $(this).css('color', 'blue');
    },
    'mouseenter': function () {
        $(this).css({
            backgroundColor: 'red',
            textDecoration: 'underline'
        });
    },
    'mouseleave': function () {
        $(this).css('background-color', 'inherit');
    },
})