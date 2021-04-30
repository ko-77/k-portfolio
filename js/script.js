$(function(){
  $(window).on('load scroll resize',function(){
  var th=$('.fv').outerHeight();
     if($(window).scrollTop()<th-50){
       $('.site-title').removeClass('black');
       $('.nav-item').removeClass('black');
        $('.burger-btn').removeClass('black');
     }else {
       $('.site-title').addClass('black');
       $('.nav-item').addClass('black');
        $('.burger-btn').addClass('black');
       }
   });
  //ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('open');
    $('.header-nav').toggleClass('open');
    $('.burger-musk').toggleClass('open');
  });

  $('.burger-musk').on('click',function(){
      $('.burger-btn').toggleClass('open');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').toggleClass('open');
  });


  $('header a').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html, body').animate({
      'scrollTop':position-91
    },500);
    if($('.burger-btn').hasClass('open')){
      $('.burger-btn').toggleClass('open');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').toggleClass('open')
    }
  });

  // スクロールフェードイン
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();

})
