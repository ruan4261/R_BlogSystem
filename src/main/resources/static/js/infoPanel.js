$(document).scroll(function () {
    let $panel = $('.blog-info-panel');//作用块
    let $docHi = $(document).height();//文档高度
    let $panelHi = $panel.height();//panel高度
    let $winHi = $(document).scrollTop();//窗口距离文档顶部距离
    //panel最高时距离顶部957px，为保留相对浏览器顶部距离至少20px，故从937开始下降panel
    //最低时应距离顶部 docHi-panelHi-自定义相对底部距离(200px)-顶部保留高度20px
    let $maxLow = $docHi - $panelHi - 300 - 20;
    if ($winHi <= 937) {
        //什么也不做
    } else if ($winHi > 937 && $winHi < $maxLow) {
        //动作区域内
        let top = $winHi - 937;
        $panel.css("top", top);
    }
});