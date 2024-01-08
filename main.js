$('#toggle').click(function() {
  $('.toggle-list').toggle()
})

// ページトップへ戻るボタン
$(function(){
  const pagetop = $('.pagetop');
  pagetop.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body, html').animate({scrollTop:0}, 500);
    return false;
  })
})

// モーダルウィンドウ
var wrapper = $('.modal-wrapper'),
  trigger = $('.modal-trigger'),
  layer = $('.modal-layer'),
  container = $('.modal-container'),
  content = $('.modal-content');

$(function() {
  $(trigger).click(function() {
    console.log('click1');
    $(wrapper).fadeIn(500);
    $(content).html($(this).prop('outerHTML'));
  })
  
  $(layer).click(function() {
    console.log('click2');
    $(this).fadeOut(500);
    $(content).fadeOut(500);
  })
})
