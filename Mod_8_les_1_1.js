// jQuery(document).ready(function () {
//     //мой код
// });
//
// $(document).ready(function () {
//     //мой код
// });
//
// $(document).ready(() => {
//     //мой код
// });
///////////////////////////////////////////////////
// $(':button').prop('disabled', true);
//
// $('button:disabled').prop('disabled', false);
//
// $(':password').css('border', '2px solid green');
///////////////////////////////////////////////////////
// $('#block').css('color', 'red');
// <div id='block' style='color: red'>Lorem</div>
///////////////////////////////////////////////////////
// $('.example').css({
//     color: 'red',
//     backgroundColor: 'pink',
//     fontSize: '18px'
// });
////////////////////////////////////////////////////////////
// $('a.active').removeClass('active');
// $('.menu li a').addClass('active');
////////////////////////////////////////////////////////////////
// $('.popup-close').closest('.popup-wrapper').fadeOut(400);
////////////////////////////////////////////////////////////////////
// let section = $(this).parents('section');
//
// $('.menu li a').click(function () {
//     $(this).closest('.menu').find('.active').removeClass('active');
//     $(this).addClass('active');
// })
////////////////////////////////////////////////////////////////////
// $('a.active').on('click', function () {
//     $(this).removeClass('active');
// })
// $('a.active').click(function () {});

/////////////////////////////////////////////////////////
$('#name').on('input', function () {console.log($(this).val());
});