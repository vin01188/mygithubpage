$(window).on('resize',function(){
  if($(window).width() >1000){
    $('#navhead').addClass('head');
    $('#navhead').removeClass('head2');
  }else{
    $('#navhead').addClass('head2');
    $('#navhead').removeClass('head');
  }
})