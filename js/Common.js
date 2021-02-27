// Toggle
function fn_Toggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
    }
    else {
        $(obj).addClass('active');
    }
}

// more class 관련 Toggle
function fn_MoreToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).next().hide();
        $(obj).removeClass('active');
    }
    else {
        $(obj).next().show();
        $(obj).addClass('active');
    }
}

// tab 관련 Toggle
function fn_TabToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).siblings().removeClass("active");
    }
    else {
        $(obj).siblings().removeClass("active");
        $(obj).addClass('active');
    }
}

// ON & OFF Toggle
function fn_OnOff(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).text('OFF').removeClass('active');
        $(obj).prev().removeClass('active');
    }
    else {
        $(obj).text('ON').addClass('active');
        $(obj).prev().addClass('active');
    }
}

// 알림 팝업 창 닫기
function fn_NotiClose() {
    $(".ico_noti").removeClass("active");
    $(".noti_pop_area").hide();
}

// ListSequence Toggle
function fn_ListSequence(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
    }
    else {
        $(obj).addClass('active');
    }
};

// 챗봇 입력 창 열기
function fn_Chatbot_Open(obj) {
    $(obj).parent().addClass("active");
}

// 챗봇 입력 창 닫기
function fn_Chatbot_Close() {
    $(".btn_chatbot").removeClass("active");
}

// 챗봇 팝업 창 열기
function fn_chat_pop_open(id) {
    $("#pop_" + id).show();
}

// 챗봇 팝업 창 닫기
function fn_chat_pop_close(id) {
    $("#pop_" + id).hide();
}

// filter area close
function fn_filterClose() {
    $(".ico_filter").removeClass("active");
    $(".filter_pop_area").hide();
}

// 셀렉트 새 창으로 열기
function go_url(url) {
    if (url != '') window.open(url, '_blank');
}

// top 버튼 클릭시 상단으로 이동
function scroll_top() {
    if ($(".contents").scrollTop() <= 1) {
        $(".btn_top").fadeOut("slow");
    }
    else {
        $(".btn_top").fadeIn("fast");
    }
};

// 토스트 팝업 실행
function fn_Toast() {
    $(".toast").toast('show')
}

// 가입프로세스 피드백 등록 영역
function fn_feedback_show(obj) {
    $(obj).next().show();
}

// 페이지마다 메뉴 개수가 다르고 즐겨찾기, 설정과 같이 메뉴가 우측에 있어 잘려보이는 경우에 실행되도록 해주시면 됩니다.
// 디바이스 가로 크기보다 메뉴 가로 크기가 더 큰 경우 크기 구해서 페이지 로드시 위치 이동
function nav_position() {
    var vwValue = 1024 * 3.90625 / 100; // vw 변환

    var nav_wid = $(".sub_menu").outerWidth() + vwValue;
    var swiper_position = - (nav_wid - $(".nav_select_swiper").outerWidth()) + "px";

    $(".sub_menu").css("transform", "translate3d(" + swiper_position + ", 0, 0px)");
}