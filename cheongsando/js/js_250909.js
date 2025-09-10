console.log('연결')
$(document).ready(function(){
    //console.log('연결')
    /*
        .tour .list ul li에 마우스를 올린 li에만 on클래스를 추가해야됨
        마우스를 오버하면 모든 li에 있는 on클래스를 지움
        (없는애는 가만히 있고 있는애만 지움)
        누가 on클래스를 가지고 있는지 모르니까
    */
   $('.tour .list ul li ').on('mouseenter', function(){
    //console.log('오버했다')
    $('.tour .list ul li ').removeClass('on')
    $(this).addClass('on')
   })

   $('footer .right_area .family_site button.open').on('click', function(){
    // console.log('여는 버튼 클릭')
    $('footer .right_area .family_site').addClass('open')
   })
   $('footer .right_area .family_site button.close').on('click', function(){
    // console.log('닫는 버튼 클릭')
    $('footer .right_area .family_site').removeClass('open')
   })

   /*footer .right_area .top를 클릭하면 브라우저가 자동 스크롤 되는것 */

   $('footer .right_area .top').on('click', function(){
    console.log('누름')
    let scrolling = $(window).scrollTop()
    console.log(scrolling)
    //$(window).scrollTop(100) /*꼭대기로 올라가야 하니까 */
    $('html, body').animate({
        scrollTop : 0
    }, 500) /*500 0.5초 top버튼 누르면 자동으로 스크롤이 위로 올라가는 것*/
   })
   
   
})//$(document).ready 무조건 맨아래

