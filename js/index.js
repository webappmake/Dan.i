﻿$(document).ready(function () {
    // modal custom
    $('.modal').on('shown.bs.modal', function (e) {
        //alert("팝업 오픈");        
    })

    $('.modal').on('hidden.bs.modal', function (e) {
        //alert("팝업 닫힘");
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // tooltip sm custom
    $('.tooltip_sm').on('shown.bs.tooltip', function () {
        $(".tooltip").addClass("tooltip-sm");
    })

    $('.tooltip_sm').on('hidden.bs.tooltip', function () {
        $(".tooltip").removeClass("tooltip-sm");
    })

    // 스크롤 여부에 따라 top 버튼 생성
    $(".contents").scroll(function () {
        setTimeout(scroll_top, 0);//화살표가 반응하여 생기는 시간
    });

    $(".btn_top").click(function () {
        $(".contents").animate({ scrollTop: 0 }, 400);//화살표 클릭시 화면 스크롤 속도
        return false;
    });

    // 스크롤이 멈추면 5초 후 top 버튼 숨기기
    $.fn.scrollStopped = function (callback) {
        var that = this, $this = $(that);
        $this.scroll(function (ev) {
            clearTimeout($this.data('scrollTimeout'));
            $this.data('scrollTimeout', setTimeout(callback.bind(that), 3000, ev));
        });
    };

    $(".contents").scrollStopped(function () {
        $(".btn_top").fadeOut("slow");
    });


    // gnb 활성화
    $(".gnb_menu > li").on("hover mouseenter mouseover", function () {
        $(".gnb_menu > li").removeClass("active");
        if ($(this).hasClass("active")) {
            // 클래스 있음
            $(this).removeClass("active")
        } else {
            // 클래스 없음
            $(".gnb_menu > li").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".gnb_menu > li").on("mouseout mouseleave", function () {
        $(".gnb_menu > li").removeClass("active");
        if ($(this).hasClass("active")) {
            // 클래스 있음
            $(this).removeClass("active")
        } else {
            // 클래스 없음
            $(".gnb_menu > li").removeClass("active");
            $(this).addClass("active")
        }
    });

    // Tab
    $('.con_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.con_tab > li').removeClass('active');
        $('.con_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
        load_chatbox();
    });

    $('.con_sub_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.con_sub_tab > li').removeClass('active');
        $('.con_sub_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
        load_chatbox();
    });

    $('.modal_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.modal_tab > li').removeClass('active');
        $('.modal_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    });

    $('.modal_sub_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.modal_sub_tab > li').removeClass('active');
        $('.modal_sub_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    });

    // Topic Toggle
    $('.topic_btn').click(function () {
        if ($(this).find("strong").hasClass('active')) {
            $(this).parent().next().hide();
            $(this).find("strong").text("토픽보기").removeClass('active');
        }
        else {
            // $(".topic_list").hide();
            // $(".topic_list_wrap").hide();
            $(this).find("strong").text("토픽보기").removeClass('active');
            $(this).parent().next().show();
            $(this).find("strong").text("토픽접기").addClass('active');
        }
    });

    // Tbl Topic Toggle
    $('.icon_tbl_toggle').click(function () {
        if ($(this).hasClass('active')) {
            $(this).parents("tr").next().hide();
            $(this).text("토픽보기").removeClass('active');
        }
        else {
            $(".tbl_topic_area").hide();
            $('.icon_tbl_toggle').text("토픽보기").removeClass('active');
            $(this).parents("tr").next().show();
            $(this).text("토픽접기").addClass('active');
        }
    });

    if (location.hash == "#RecommendSubject") {
        var activeTab = $("#RecommendSubject").attr('rel');

        $(window).scrollTop(0);
        $('.con_tab').find("li").removeClass("active");
        $('.con_tab_box').removeClass('active');
        $('.con_tab').find('#RecommendSubject').addClass('active')
        $('#' + activeTab).addClass('active');
    }

    // 필터 영역 이외의 영역 클릭시 필터 영역 닫기
    $(document).mouseup(function (e) {
        var ico_filter = $(".btn_select");
        var filterPopup = $(".filter_wrap");
        if (filterPopup.has(e.target).length === 0) {
            ico_filter.removeClass("active").next().hide();
        }
    });

    // modal backdrop multiple issue
    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });

    //전공이수에 따른 졸업자수 .status_area
    $('.status_list > li').click(function(){
        var num=$(this).index();

        $('.status_list > li').removeClass('active');
        $(this).addClass('active');
        $('.status_area > .status_cont > li').removeClass('active');
        $('.status_area > .status_cont > li').eq(num).addClass('active');
        return false;
    })

     // 캠퍼스라이프 gnb 활성화
     $('.camp_menu > li').click(function(){
        var num=$(this).index();

        $('.camp_menu > li').removeClass('active');
        $(this).addClass('active');
        $('.modal_body > section').removeClass('active');
        $('.modal_body > section').eq(num).addClass('active');
        return false;
    });
    
});


