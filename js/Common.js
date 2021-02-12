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
    if ($(window).scrollTop() <= 1) {
        $(".btn_top").fadeOut("slow");
    }
    else {
        $(".btn_top").fadeIn("fast");
    }
};