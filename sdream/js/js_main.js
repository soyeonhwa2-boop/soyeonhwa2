
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

autoplay: {  /* 팝업 자동 실행 */
    delay: 1000,
    disableOnInteraction: true,
},

effect: "fade", /* fade 효과 */

loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
navigation: {  /* 이전, 다음 버튼 */
    nextEl: '.visual .btn_wrap .btn_next',  /* 다음 버튼의 클래스명 */
    prevEl: '.visual .btn_wrap .btn_prev',  
},

});


	$('.visual .btn_wrap .btn_play').on('click', function(){
        console.log('실행 버튼 누름')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_stop').show()
    })
    $('.visual .btn_wrap .btn_stop').on('click', function(){
        console.log('정지 버튼 누름')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_play').show()
    })

    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        470: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 16,
		},
		769: {    /* 640px 이상일때 적용 */
			slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});

$('footer .top').on('click', function(){
    // console.log('top 클릭')
    $('html, body').animate({
        scrollTop: 0
    }, 500)
})

$('header').on('mouseenter', function(){
    $(this).addClass('fixed')
    // console.log('header에 오버함')
})
$('header').on('mouseleave', function(){
    //브라우저 스크롤 값이 0보다 크면 작동하면 안됨
    //0이거나 0보다 작을때만--> 조건문
    if(scrolling <= 0){
        $(this).removeClass('fixed')
        console.log('스크롤은 값이 0이거나 0보다 작다')
    }
})
/*물건담는 바구니
    문서가 로딩된 이후 단 1번 실행*/
let scrolling
scroll_chk()

function scroll_chk(){
    scrolling = $(window).scrollTop()
    //스크롤값이 0보다 크면 header에 fixed 클래스를 추가함
    if(scrolling > 0){
        console.log('0보다 크다')
        $('header').addClass('fixed')
    }else{
        console.log('0이다')
        $('header').removeClass('fixed')
    }
}
// console.log(scrolling)
$(window).scroll(function(){
    //스크롤 할때마다 1번 실행
    scroll_chk()
})
})//맨끝