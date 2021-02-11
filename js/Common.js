$(document).ready(function () {
    // modal custom
    $('.modal').on('show.bs.modal', function (e) {
        //alert("팝업 오픈");
    })

    $('.modal').on('hidden.bs.modal', function (e) {
        //alert("팝업 닫힘");
        chatbot_box();
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();

    //$('[data-toggle="popover"]').popover({
    //    trigger: 'focus',
    //    html: true
    //});

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


    // 스크롤 높이에 따라 chatbot box 영역 크기 변경
    var $w = $(window),
        footerHei = $('footer').outerHeight(),
        $banner = $('.chatbot_wrap');

    var header = $(".chatbot_wrap").offset().top;

    var wrapHei = $("#wrap").outerHeight(true);
    var contHei = $(".contents").outerHeight(true);

    var EqHeightDiv = $(".contents_wrap, .chatbot_area");

    function load_chatbox() {
        var sT = $w.scrollTop();
        var val = $(document).outerHeight(true) - $w.outerHeight(true) - footerHei;

        // wrap이 container보다 작을 때
        if (wrapHei < contHei) {
            //alert("wrap이 container보다 작을 때");
            if (121 <= $(window).scrollTop()) {
                //alert("스크롤이 헤더 지날 때");
                $(".chatbot_wrap").addClass("active").height("");
                
                if (sT >= val) {
                    equalHeight();
                } else {
                    $banner.removeClass('active1 active2 on');
                }
            }
            else {
                $(".chatbot_wrap").removeClass("active1 on").height("");
            }
        }
        // wrap이 container보다 클 때  
        else {
            //alert("wrap이 container보다 클 때");
            if (sT >= val) {
                $banner.removeClass('active active1 active2 on');
                equalHeight();
            } else {
                if ($banner.hasClass('active')) {
                    $(".chatbot_wrap").height("");
                }
                else {
                    $banner.removeClass('active active1 active2 on').height("");
                }

            }
        }
        return false;
    }

    // chatbot box 
    function chatbot_box() {
        nowScrollTop = $(this).scrollTop();
        var sT = $w.scrollTop();
        var val = $(document).outerHeight(true) - $w.outerHeight(true) - footerHei;

        // 스크롤이 header 지날 때
        if (header <= nowScrollTop) {
            //alert("스크롤이 헤더 지날 때");
            $(".chatbot_wrap").addClass("active");
        }

        // 스크롤이 헤더 영역에 있을 때
        //if (1 < nowScrollTop <= 120) {
        if (120 > nowScrollTop) {
            //alert("스크롤이 헤더 영역에 있을 때");
            if (wrapHei < contHei) {
                //alert("wrap이 container보다 작을 때");
                $(".chatbot_wrap").addClass("active").height("");

                //$(".chatbot_wrap").removeClass("active2").height("");

            } else {
                //alert("wrap이 container보다 클 때");
                $(".chatbot_wrap").addClass("active").height("");;
                //equalHeight();
                $(".chatbot_wrap").removeClass("active1 on").height("");
            }
        }

        // 스크롤이 최상단에 있을 때
        if (0 == nowScrollTop) {
            //alert("스크롤이 최상단에 있을 때");
            if (wrapHei < contHei) {
                //alert("wrap이 container보다 작을 때");
                $(".chatbot_wrap").removeClass("on active active1").height("");

            } else {
                //alert("wrap이 container보다 클 때");
                $(".chatbot_wrap").removeClass("on active active1").height("");;

                //$('#wrap').removeClass('active');
            }
            //$('#wrap').removeClass('active');
        }

        // 푸터 보일 때
        if (sT >= val) {
            //alert("푸터 보일 때");
            if (wrapHei < contHei) {
                //alert("wrap이 container보다 작을 때");
                $banner.addClass('on');
                equalHeight();

            } else {
                //alert("wrap이 container보다 클 때");
                if (120 > nowScrollTop) {
                    //alert("wrap이 container보다 작을 때");
                    $banner.addClass('on');
                    $(".chatbot_wrap").addClass("active")
                    equalHdHeight();
                } else {
                    $banner.addClass('on');
                    equalHeight();
                }
            }
        }

        // 푸터 안보일 때
        else {
            //alert("푸터 안보일 때");
            $banner.removeClass('on')
        }
    }

    // equal height
    function equalHeight() {
        var biggestHeight = 0;

        EqHeightDiv.each(function () {
            if ($(this).height() > biggestHeight) {
                biggestHeight = $(this).height();
            }
        });
        $banner.height(biggestHeight);
    }

    function equalHdHeight() {
        var biggestHeight = 0;

        EqHeightDiv.each(function () {
            if ($(this).height() > biggestHeight) {
                biggestHeight = $(this).height();
            }
        });
        $banner.height(biggestHeight - 120);
    }

    // resize event equal height
    var w_width = $(window).width();
    function w_resize() {
        if (w_width > 1241) {
            //
        } else {
            equalHeight();
        }
    }

    // scroll event
    $w.on('scroll', function () {
        chatbot_box()
        fixed_btn();
    });

    // window resize event 
    $(window).resize(function () {
        w_resize();
    }).resize();


    // fixed btn position
    // chatbot btn & chatbot wrap & top btn
    function fixed_btn() {
        var w_width = $(window).width();
        var w_scrollTop = $(window).scrollTop();
        var chatbtn = $(".btn_chatbot"); // chatbot btn
        var chatwrap = $(".chat_btn_wrap"); // chatbot input wrap
        var topbtn = $(".btn_top"); // btn top
        var conHei = $("#header").outerHeight() + $("#container").outerHeight() + $("#footer").outerHeight(); // wrap height
        var winHei = $(window).height(); // window height
        var btn_position = (conHei - winHei) - w_scrollTop;
        var chatwrap_position = btn_position + 114 - 135; // 


        // 1241 해상도
        if (w_width > 1241) {
            chatbtn.css("bottom", btn_position);
            chatwrap.css("bottom", chatwrap_position);
            topbtn.css("bottom", "20px");
        }
        // 0 ~ 1240 해상도
        else {
            chatbtn.css("bottom", btn_position);
            chatwrap.css("bottom", chatwrap_position);
            topbtn.css("bottom", btn_position);
        }
    }

    // window load chatbox
    load_chatbox();
    fixed_btn();


    //$(window).bind('paste', function (e) {
    //    load_chatbox();
    //    alert("text");
    //});

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

    // button link
    $(document).on("click", "[data-href]", function (e) {
        var href = $(this).attr("data-href") || $(this).attr("href");
        var anchor = document.createElement("a");
        if (!anchor.click) {
            //console.log("click", !anchor.click);
            location.href = href;
        } else {
            anchor.setAttribute("href", href);
            anchor.style.display = "none";
            $("head, body").first().append(anchor);
            //console.log("click", anchor.parentNode.tagName);
            anchor.click();
        }
    });

    $(document).on("click", "[data-popup-get]", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = $(this).attr("data-popup-get") || this.href;
        $.get(url, function (html) {
            $("#Modal").data("url", url).html(html).promise().done(function () {
                $("#Modal").html(html).modal("show");
            });
        });
    });

    $(document).on("click", "[data-popup-get1]", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = $(this).attr("data-popup-get1") || this.href;
        $.get(url, function (html) {
            $("#Modal").data("url", url).html(html).promise().done(function () {
                $("#Modal").html(html).modal("show");
            });
        });
    });
});


