$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $("#main-nav").addClass('white');   
    }else{
        $("#main-nav").removeClass('white');
    }
});

$(document).scroll(function() {
    console.log($(document).scrollTop());
})

$(window).scroll(function(){
    console.log('test');
    var percent = ($(window).scrollTop()*100)/($(document).height()-($(this).height()));
    $('#progressbar').css('width', Math.ceil(percent)+ '%');
   console.log(percent);
    
});

