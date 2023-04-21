
$(document).ready(function () {



  // 메뉴 기능
  const header = $('.header'),
    gnb = $('.gnb')
  let gnbHeight = gnb.height();
  // console.log(gnbHeight)
  gnb.mouseenter(function () {
    header.css('height', gnbHeight)
  })
  gnb.mouseleave(function () {
    header.css('height', 100)
  })

  // 모바일 메뉴 기능
  //.mb-bt를 저장해서 활용하자
  $('.mb-bt').click(function (e) {
  e.preventDefault(); //a태그의 링크 기능을 삭제해 주겠다
  $(this).toggleClass('mb-bt-open') //햄버거 모양 바꿔준거 
  $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
  $('.mb-nav').toggleClass('mb-nav-open')
  $('.mb-menu>li').height(45)



  })

    //모바일메뉴배경을클릭시사라짐 (원사이트에는 없는 기능 )
    const mb_menu_mask = $('.mb-menu-mask')
    mb_menu_mask.click(function () {
        //모바일버튼기능초기화
        $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        $('.mb-menu>li').height(45)
        $('.mb-mainmenu').removeClass('mb-mainmenu-open')
    })



//화면사이즈체크
$(window).resize(function () {
  let temp = $(window).width(); //resize 화면너비 찾기 
  // console.log(temp)
  if (temp > 1000) {
      $('.mb-bt').removeClass('mb-bt-open') //햄버거 모양 바꿔준거 
      $('.mb-menu-mask').removeClass('mb-menu-mask-active')
      $('.mb-nav').removeClass('mb-nav-open')
  } else {
      $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
      $('.all-menu-mask').removeClass('all-menu-mask-active')
  }
})
//모바일 메뉴 펼치기
//1.모바일 메뉴 불러오기
const mb_mainmenu = $('.mb-mainmenu')
//2.모바일 서브메뉴 불러오기
const mb_submenu = $('.mb-submenu')

let mb_submenu_height = [];  


$.each(mb_submenu, function (index) {
  //각각의 .mb-submenu로 가서 li의 개수를 파악한다.
  let count = $(this).find('li').length;
  //console.log(count)
  mb_submenu_height[index] = 45 * count;
})
//console.log(mb_submenu_height)
let mb_li = $('.mb-menu > li')
$.each(mb_mainmenu, function (index) {
  // console.log(mb_mainmenu)
  $(this).click(function (e) {
      e.preventDefault();
      $(this).toggleClass('mb-mainmenu-open')
      //mb-mainmenu-open이 있으면 펼치고 없으면 닫기
      //let active = this.contains('')  hasclass=contains
      let active = $(this).hasClass('mb-mainmenu-open')
      if (active) {
          //클릭이 된 경우
          let temp = mb_submenu_height[index]
          mb_li.eq(index).height(temp + 45)
          mb_li.eq(index).siblings().height(45); //해당요소의 높이 부여
      } else {
          //클릭이 안 된 경우
          mb_li.eq(index).height(45);
       

      }
      //mb_li.eq(index) : li요소 순서  0~5

  })
})


   // visual swiperslide
   let sw_banner = new Swiper(".sw-visual", {
    // autoplay: true,
    loop: true,
  slidesPerView: 1,
  
  // centeredSlides: false,
  speed: 300,

  observer: true,
  observeParents: true,
  autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
 
  const banner_play = $('.Pause')

  banner_play.click(function () {
      $(this).toggleClass("Pause-play");
      let temp = $(this).hasClass('Pause-play')
      if (temp) {
          //슬라이드작동안함
          //위에 설정해놓은new swiper .swbanner 를 변수로선언해준다
          sw_banner.autoplay.start();
      } else {
          //슬라이드 작동
      
          sw_banner.autoplay.stop();
      }
  })



  if (s.params.paginationType === 'progress') {
    var scale = (current + 1) / total,
        scaleX = scale,
        scaleY = 1;
    if (!s.isHorizontal()) {
        scaleY = scale;
        scaleX = 1;
    }
    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
}
})
$(window).scroll(function(event){ 
  let st = $(this).scrollTop();
  if(st>186){
    
      $('.mb-bt').addClass('hide')
  }else {
     
      $('.mb-bt').removeClass('hide')
  }
})
// -------------------------메뉴영역-Slide--------------------- 
new Swiper(".sw-eventItem", {



  // autoplay: true,
  // loop: true,
  pagination: {
    el: ".swiper-Item-pagination",
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  spacebetween: 20,
  watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정 .
  breakpoints: {
    1400: { slidesPerView: 4, spacebetween: 10 },
    1300: { slidesPerView: 4 },
    1200: { slidesPerView: 3 },
    1000: { slidesPerView: 3 },
    980: { slidesPerView: 2, },
    800: { slidesPerView: 2, },
    750: { slidesPerView: 2, },
    700: { slidesPerView: 2, spacebetween: 10 },
    676: { slidesPerView: 3, spacebetween: 10 },
    635: { slidesPerView: 3, },
    500: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  }
});
// 음료메뉴 탭-슬라이드 영역-----------------
$(document).ready(function () {
  tab();
})

function tab() {
  //탭메뉴 클릭할 때 실행
  $(".tab_wrap .tit_list > li a").on("click", function (e) {
    e.preventDefault();

    //초기화
    $(".tab_wrap .tit_list > li").removeClass("active");
    $(".tab_wrap .tab_list").hide();

    //실행
    $(this).parent().addClass("active");
    var activeTab = $(this).attr("href");
    $(activeTab).show();
  });

  //초기 탭 설정
  var activeChk = 0;
  $(".tab_wrap .tit_list > li> a").each(function (i) {
    if ($(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).find('a').trigger("click");
      activeChk++
    }
  });

  //active 지정 안했을 시 첫 탭메뉴 선택
  if (activeChk == 0) {
    $(".tab_wrap .tit_list > li:first-child a").trigger("click");
  }
  slider();//슬라이드 실행
}
// business영역 - 결제이벤트배너
new Swiper(".sw-business", {
  // autoplay: true,
  loop: true,
  effect: "fade",
  speed: 1000, 
  pagination: {
    el: ".swiper-business-pagination",
  },
})

/* 오렌지박스 */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
// sevenApp 탭메뉴
$(function () {
  const tabAnchor = $('.tabs-nav > li a'), // console log해보면 배열들 나옴
    tabPanel = $('.tabs-panel')
  //링크를 클릭했을때 할 일
  tabAnchor.click(function (e) {
    e.preventDefault();

    tabAnchor.removeClass('active'); //전체를 클리어해놓고
    $(e.currentTarget).addClass("active")//내가 선택한거 active된다 this로 적어줘도된다 

    tabPanel.hide(); //display:none;
    let target = $(this).attr('href')
    $(target).show();

  })
  tabAnchor.eq(0).trigger("click")
});
// gotop버튼
const go_top = $('.gotop')
go_top.click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500)
})