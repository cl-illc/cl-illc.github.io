$('.image_cover').each(function(){
var imageWidth = $(this).find('img').width();
var imageheight = $(this).find('img'). height();
  if(imageWidth > imageheight){
    $(this).addClass('landscape');
  }else{
    $(this).addClass('potrait');
  }
})
