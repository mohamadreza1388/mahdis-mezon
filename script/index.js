$(function () {
    let thisIndex = $(".filters").filter(".active").index() + 1
    $(".product").hide().filter(".filter-" + thisIndex).css("display", "flex")
    $(".filters").click(function () {
        $(".filters").filter(".active").removeClass("active")
        $(this).addClass("active")
        let thisIndex = $(".filters").filter(".active").index() + 1
        $(".product").hide().filter(".filter-" + thisIndex).css("display", "flex")
    })
    $('.slider').slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 910, settings: {
                arrows: false,
            }
        }, {
            breakpoint: 768, settings: {
                arrows: false
            }
        }]
    });
    $("#bars-icon").click(function () {
        $("#right-bar-menu").css("right", "0")
    })
    $("#right-bar-menu>i").click(function () {
        $("#right-bar-menu").css("right", "-100%")
    })
    $('#basket-shop').click(function () {
        $(".overlay").css({"left": "0"})
        $("#basket-sh-page").css({"left": "0"})
        return false
    })

    $('#basket-sh-page i').click(function () {
        $(".overlay").css({"left": "-100%"})
        $("#basket-sh-page").css({"left": "-100%"})
        return false
    })

    $('.overlay').click(function () {
        $(".overlay").css({"left": "-100%"})
        $("#basket-sh-page").css({"left": "-100%"})
        return false
    })

    $('#basket-sh-page').click(function () {
        $("#basket-sh-page").css({"left": "0"})
        return false
    })

    $("#meno-item li:has(div)").prepend("<i class='fa-solid fa-angle-down'></i>")
        .hover(function () {
            $(this).children(".sub-item").fadeIn(200).css("display", "flex")
        }, function () {
            $(this).children(".sub-item").fadeOut(200)
        }).children(".sub-item").prepend("<i class='fa-solid fa-close close-btn'></i>")
    $(".sub-item i[class*='close']").click(function () {
        $(this).parent().fadeOut(200)
    })


    $(".sub-item").css("width", $(window).innerWidth() * 90 / 100 + "px")

    $(window).resize((function () {
        $(".sub-item").css("width", $(window).innerWidth() * 90 / 100 + "px")
    }))


    $('.best-s-wrapper').slick({
        rtl: true, slidesToShow: 4, slidesToScroll: 1, arrows: true, responsive: [{
            breakpoint: 1200, settings: {
                slidesToShow: 4, slidesToScroll: 1,
            }
        }, {
            breakpoint: 992, settings: {
                slidesToShow: 3, slidesToScroll: 1, arrows: false
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 2, slidesToScroll: 1, arrows: false
            }
        }, {
            breakpoint: 576, settings: {
                slidesToShow: 1, slidesToScroll: 1, arrows: false
            }
        }]
    });

    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hour = date.getHours()

    setInterval(function () {
        let out_seconds = seconds--
        if (seconds === 0) {
            seconds = 60;
            minutes--
        }
        if (minutes === 0) {
            minutes = 60;
            hour--
        }
        let out_minutes = minutes
        let out_hour = hour + 1


        $("#second .number").text(out_seconds)
        $("#minutes .number").text(out_minutes)
        $("#hour .number").text(out_hour)
    }, 1000)

    $("#filter li").click(function () {
        let className = $(this).attr("class")

        console.log(className)

        if (className === "all") {
            $(".best-s").fadeIn(200)
        } else {
            $("#product-wrapper .best-s").fadeOut(200).filter("." + className).fadeIn(200)
        }
        $('#filter li.active').removeClass('active')
        $(this).addClass('active')
    })

    $(".col-wrapper .left .acc-title").append("<i class='fa-solid fa-angle-left'></i>")
        .click(function () {
            $('.acc-title i').removeClass('fa-angle-down').addClass("fa-angle-left")
            if ($(this).next().is(":hidden")) {
                $(this).children("i").removeClass("fa-angle-left").addClass("fa-angle-down")
            } else {
                $(this).children("i").removeClass("fa-angle-down").addClass("fa-angle-left")
            }
            $(this).next(".acc-content").slideToggle(300).siblings(".acc-content").slideUp(300)
        })
    $("#last-content .right .acc-title .left").append("<i class='fa-solid fa-plus-square'></i>")

    $("#blog-wrapper").slick({
        rtl: true, dots: true, slidesToShow: 3, slidesToScroll: 1, responsive: [{
            breakpoint: 1200, settings: {
                slidesToShow: 3, slidesToScroll: 1,
            }
        }, {
            breakpoint: 992, settings: {
                slidesToShow: 2, slidesToScroll: 1, arrows: false
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 1, slidesToScroll: 1, arrows: false
            }
        }, {
            breakpoint: 660, settings: {
                slidesToShow: 2, slidesToScroll: 1, arrows: false
            }
        }]
    })

    $("#last-content .col-wrapper .right .acc-title").click(function () {
        $("#last-content .col-wrapper .right .acc-title .left i").removeClass("fa-minus-square").addClass("fa-plus-square")
        if ($(this).parent().siblings(".left").children("#acc-content-wrapper").children(".acc-content").eq($(this).index()).is(":hidden")) {
            $(this).children(".left").children("i").removeClass("fa-plus-square").addClass("fa-minus-square")
        } else {
            $(this).children(".left").children("i").removeClass("fa-minus-square").addClass("fa-plus-square")
        }
        $(this).parent().siblings(".left").children("#acc-content-wrapper").children(".acc-content").eq($(this).index()).toggle(300).siblings(".acc-content").hide(300)

    })
    $("#form .container .right form .inp-box i, #form .container .left form .inp-box i").click(function () {
        $(this).toggleClass("fa-eye")
        let className2 = $(this).attr("class")
        console.log(className2)
        if (className2 === "fa-solid fa-eye-slash fa-eye") {
            $(this).next().attr("type", "text")
        } else {
            $(this).next().attr("type", "password")
        }
    })
    setInterval(function () {
        $(".form-control:valid").prev().css("left", "40px")
        $(".form-control:invalid").prev().css("left", "10px")
    }, 100)
})