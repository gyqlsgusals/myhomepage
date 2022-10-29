$("#gnbList li").on('click', function(e) {
    e.preventDefault();
    let idName = $(this).children('a').attr('href');
    let pos = $(idName).position().top;
    $("html, body").animate({ scrollTop: pos-$("#gnbList").height() })
})



let state = 1;
let posTop = $(window).height()-400;
$(window).on('scroll', function(){
    if( $(window).scrollTop() >= posTop && state==1 ){
        state = 0;
        $('#about > div').each(function(){
            $(this).delay($(this).index() * 200).animate({ opacity: 1, marginTop: 0 }, 500)
        })
        
    }
    else if( $(window).scrollTop() < 300 && state == 0){
        state = 1;
        $('#about > div').animate({ opacity: 0, marginTop: 200 }, 1000)
     }
})


