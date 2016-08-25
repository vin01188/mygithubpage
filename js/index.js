$(window).on('resize',function(){
  if($(window).width() >1000){
    $('#navhead').addClass('head');
    $('#navhead').removeClass('head2')
    $('#left').addClass('wl');
    $('#right').addClass('wr');
        $('#left2').addClass('wl');
    $('#right2').addClass('wr');
  }else{
    $('#navhead').addClass('head2');
    $('#navhead').removeClass('head');
    $('#left').removeClass('wl');
    $('#right').removeClass('wr');
    $('#left2').removeClass('wl');
    $('#right2').removeClass('wr');
  }
})