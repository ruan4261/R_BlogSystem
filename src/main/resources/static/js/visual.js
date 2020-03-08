$('.drop-button').bind("mouseover", function () {
    $(this).next().addClass('active');
});
$('.drop-button').bind("mouseout", function () {
    $(this).next().removeClass('active');
});
$('.drop-show').bind("mouseover", function () {
    $(this).addClass('active');
});
$('.drop-show').bind("mouseout", function () {
    $(this).removeClass('active');
});
$('.left-nav-drop').bind("click", function () {
    $(this).next().toggleClass("active");
});
$('#left-nav-open').bind("click", function () {
    $(".left-nav").addClass("active");
    $(".shade").addClass("active");
});
$('#left-nav-close').bind("click", function () {
    $(".left-nav").removeClass("active");
    $(".shade").removeClass("active");
});
$('.lang-center').bind("click", function () {
    $(".lang-menu").toggleClass("active");
});
$(document).on('touchstart', function (e) {
    noLangTouch(e);
    noNavTouch(e);
});
$(document).on('click', function (e) {
    noLangTouch(e);
});

function pageUp() {
    window.scrollBy(0, -30);
    scrolldelay = setTimeout('pageUp()', 5);
    let sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop == 0) clearTimeout(scrolldelay);
}

function pageDown() {
    window.scrollBy(0, 30);
    scrolldelay = setTimeout('pageDown()', 5);
    let scrollTop = $(window).scrollTop();
    let scrollHeight = $(document).height();
    let windowHeight = $(window).height();
    if (scrollTop + windowHeight >= scrollHeight) clearTimeout(scrolldelay);
}

function noLangTouch(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    while (elem instanceof Element) {
        let cName = elem.className;
        if (cName.indexOf('lang-center') != -1) {
            return;
        }
        elem = elem.parentNode;
    }
    $('.lang-menu').removeClass("active");
}

function noNavTouch(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    while (elem instanceof Element) {
        let cName = elem.className;
        if (cName.indexOf('nav-li') != -1) {
            return;
        }
        elem = elem.parentNode;
    }
    $('.drop-show').removeClass("active");
}