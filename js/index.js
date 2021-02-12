$(document).ready(function () {
    // modal custom
    $('.modal').on('show.bs.modal', function (e) {
        //alert("팝업 오픈");
    })

    $('.modal').on('hidden.bs.modal', function (e) {
        //alert("팝업 닫힘");
        chatbot_box();
    });

    // 스크롤 여부에 따라 top 버튼 생성
    $(window).scroll(function () {
        setTimeout(scroll_top, 0);//화살표가 반응하여 생기는 시간
    });

    $(".btn_top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);//화살표 클릭시 화면 스크롤 속도
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

    $(window).scrollStopped(function () {
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
    $('.rel_toggle').click(function () {
        if ($(this).find("span").hasClass('active')) {
            $(this).next().hide();
            $(this).find("span").text("토픽보기").removeClass('active');
        }
        else {
            $(".rel_topic_list").hide();
            $('.rel_toggle').find("span").text("토픽보기").removeClass('active');
            $(this).next().show();
            $(this).find("span").text("토픽접기").addClass('active');
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

    // modal backdrop multiple issue
    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });
});


