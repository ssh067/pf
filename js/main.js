new WOW().init();

function winOpen(){
    window.open('열려고 하는 주소창','popup','width=690, height=459, left=200, top=50')
}
function re(){
    window.location.reload(); //새로고침 F5누른 효과
}


var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
    sectionsColor: ['#fff', '#eee', '#fff'],
    autoScrolling: true,       //스크롤바를 스크롤하면 한페이지씩 넘어감
    scrollBar: true,
    navigation:true,
});
$(window).scroll(function(){
    $("header").addClass('scroll');
    $('header h1 a').addClass('scroll')
    $('.gnb_list li').addClass('scroll')
    if($(window).scrollTop() == 0){
        $("header").removeClass('scroll');
        $('header h1 a').removeClass('scroll')
        $('.gnb_list li').removeClass('scroll')
    }
});

//상단 메뉴를 클릭했을때 on class 적용
$('.gnb_list li a').click(function(){
    if($(this).hasClass('on')){
    } else {
        $('.gnb_list li a').removeClass('on');
        $(this).addClass('on');
    }
})


$(window).scroll(function(){
if($('body').hasClass('fp-viewing-section1')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s1').addClass('on');
}  
if($('body').hasClass('fp-viewing-section2')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s2').addClass('on');
    $('.profil_img').addClass('ani')
    $('.about_txt').addClass('ani')
    $('.HTML').addClass('ani');
    $('.CSS').addClass('ani');
    $('.JAVA_SCRIPT').addClass('ani');
    $('.jQuary').addClass('ani');
    $('.Bootstrap').addClass('ani');
    $('.right_about').addClass('ani')
}
if($('body').hasClass('fp-viewing-section3')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s3').addClass('on');
}
if($('body').hasClass('fp-viewing-section5')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s3').addClass('on');
}
if($('body').hasClass('fp-viewing-section6')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s4').addClass('on');
}
if($('body').hasClass('fp-viewing-section7')){
    $('.gnb_list li a').removeClass('on')
    $('.gnb_list li .gnb_s5').addClass('on');
}
})

$(".incheon_mobile").click(function(){
    window.open("https://ssh067.github.io/Incheon/index.html", "", "resizable=no, toolbar=no, width=400 , height=1000");
});

$(".kia_mobile").click(function(){
    window.open("https://ssh067.github.io/kia_k5/", "", "resizable=yes, toolbar=no, width=400 , height=1000");
});

$(".hyundai_mobile").click(function(){
    window.open("https://ssh067.github.io/hyundai/index.html", "", "resizable=yes, toolbar=no, width=400 , height=1000");
});

$('.hyundai_mobile, .kia_mobile, .incheon_mobile').on("click",function(e){
    e.preventDefault();
});