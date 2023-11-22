$(document).ready(function(){
    $('#fullpage').fullpage({
        // navigation:true,
        // navigationTooltips : ['1','2','3','4','5','6'],
        
        afterLoad: function (anchorLink,  index) {
			if (index >= 2){
                $('header .gnb-wrap a').addClass('wow')
                $('header #logo').css('background', 'transparent')
                $('header #logo a').css('display', 'block')
                $('header .eng').addClass('color')
                $('header .login .menu a').css('display', 'block')
                $('.fixed .fixed-arrow').animate({
                    'height' : '64px'
                })
			}else {
                $('header .gnb-wrap a').removeClass('wow')
                $('header #logo').css('background', "url('../img/logo_white.svg')no-repeat center/cover")
                $('header #logo a').css('display', 'none')
                $('header .eng').removeClass('color')
                $('header .login .menu a').css('display', 'none')
                $('.fixed .fixed-arrow').animate({
                    'height' : '0'
                })
            }
            var idx = index;
            // console.log(idx)
            $('#pagenum').text('0' + idx);
            if(idx == 7){
                $('#pagenum').text('06');
            }

            var progress = (idx / $('#fullpage #section').length) * 120;
            console.log(progress)
            $('#bar').css('height', progress + 'px');

            if(idx == 7){
                $('#bar').css('height', '120px');
            }
        }
            

       
    })
    
    $('.fixed-arrow').click(function(e){
        e.preventDefault()
        $('#fullpage').fullpage.moveTo(1);
    })

    let header = $('header')
    let page = $('#fullpage').fullpage(1)
    if(header == page){
        $('header').removeClass('wow')
    }else{
        $('header').addClass('wow')
    }

    let next = $('.page2 .swiper-slide').index()
        console.log(next)

        

        








    $('.taps li').click(function(){
        $('.taps li h3').css({
            color: '#999'
        })
        $(this).find('h3').css({
            color : 'black'
        })
        $('.taps li p').css('display', 'none')
        $(this).find('p').css({
            display : 'block',
            'font-weight' : 'bold'
        })
        $('.taps li h3').removeClass('active')
        $(this).find('h3').addClass('active')

        // tab
        let idx = $(this).index()
        // console.log(idx)
        $('.page2').css('display', 'none')
        $('.page2').eq(idx).css('display', 'block')
    })
    
    // 헤더 호버 했을때 
    $('header').mouseenter(function(){
        $('.depth2').show().animate()
    })
    $('header').mouseleave(function(){
        $('.depth2').hide()
    })
    $('.page2 .one .swiper-button-next').click(function(){
        $('.page2  .one .swiper-wrapper').css({
            'left' : '170px',
            // 'transfrom':'translate3d(-352px, 0, 0)'
        })
    })
    $('.page2 .three .swiper-button-next').click(function(){
        $('.page2  .three .swiper-wrapper').css({
            'left' : '170px',
            // 'transfrom':'translate3d(-352px, 0, 0)'
        })
    })



    let count = 0
    $('.page2 .two .swiper-button-next').click(function(){
        count++
        console.log(count)
        if(count == 1){
            $('.page2  .two .swiper-wrapper').css({
                'left' : '170px',
            })
        }else if(count >=2){
            $('.page2  .two .swiper-wrapper').css({
                'left' : '320px',
            })
        }
    })
    $('.page2 .one .swiper-button-prev').click(function(){
        $('.page2 .one .swiper-wrapper').css({
            'left' : '0'
        })
    })
    let pcount = 0
    $('.page2 .two .swiper-button-prev').click(function(){
        pcount++
        if(pcount == 1){
            $('.page2  .two .swiper-wrapper').css({
                'left' : '170px',
            })
        }else if(pcount >=2){
            $('.page2  .two .swiper-wrapper').css({
                'left' : '160px',
            })
        }
    })

    
    $('.fixed').fullpage.move(2)(function(){
        ('.fixed').css({
            'height' : '300'
        })
    })
})
