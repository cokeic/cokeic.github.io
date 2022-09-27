// 轮播图
var autoCount;
var showIndex = 0;
var swiperTimer;
var timer;

function runSlide() {
    // 渲染图片
    getdata(function (res) {
        console.log(res);
        res.data.forEach(function (item, index) {
            var width = $(".swiper").width();
            $(".swiper").css("width", width + sw);
            $(`<img src="${item.image}" alt="">`).appendTo($("#top .swiper"));
        });
        $(`<img src="${res.data[0].image}" alt="">`).appendTo($("#top .swiper"));
        var width = $(".swiper").width();
        $(".swiper").css("width", width + sw);
    }, "./json/index-slide.json")

    // 执行轮播
    timer = setInterval(function () {
        toScroll(showIndex + 1)
    }, 2000)
}

// 轮播的函数
function toScroll(targetIndex) {
    // 完成两张图片的切换
    // 路程
    var s = -1 * targetIndex * sw - $(".swiper").position().left;
    var t = 20; // swiperTimer执行20次完成图片切换 
    var v = s / t;
    var count = 0; // 计数
    clearInterval(swiperTimer);
    swiperTimer = setInterval(function () {
        count++;
        var l = $(".swiper").position().left + v;
        $(".swiper").css('left', l);
        if (count === t) {
            clearInterval(swiperTimer);
            if (targetIndex === 6) {
                // 需要跳转到第1张
                targetIndex = 0;
            }
            // 防止出现偏差
            $(".swiper").css('left', -1 * targetIndex * sw)
            // 更改showIndex的值
            showIndex = targetIndex;
        }
    }, 20)
}

// 设置热门超英
function setchaoying() {
    getdata(function (res) {
        console.log(res);
        res.data.forEach(function (item, index) {
            $(`
                <li>
                <img width="100" src="${item.cover}" alt="">
                <p class="title">${item.name}</p>
                <p class="score">
                    <span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span>
                    <span class="num">${item.score}</span>
                </p>
                </li>
            `).appendTo("#chaoyin ul");
            onStar($("#chaoyin ul li").eq(index).find(".score").children(), item.score);
        });
    }, "./json/index-hot.json");
}

// 设置热门预告
function setremen() {
    getdata(function (res) {
        console.log(res);
        res.data.forEach(function (item, index) {
            $(`
                <li>
                <video poster="${item.poster}" src="${item.trailer}"></video>
                <div class="video_btn" flag=1>&#xe64f;</div>
                </li>
            `).appendTo($("#yugao ul"))
                .children(1).click(function (e) {
                    if ($(this).attr('flag') == 1) {
                        $(this).attr('flag',2).hide()
                                .prev().css('opacity',1).get(0).play();
                    }
                    e.stopPropagation();
                })
                .prev().click(function(e) {
                    $(this).next().attr('flag',1).show();
                    $(this).css('opacity',0.5).get(0).pause();
                    e.stopPropagation();
                })
        });
    }, "./json/index-yugao.json");
}

// 设置猜你喜欢
function setxihuan() {
    getdata(function (res) {
        console.log(res);
        res.data.forEach(function (item, index) {
            $(`
                <li>
                <div class="zuo">
                    <img width="90" src="${item.cover}" alt="">
                </div>
                <div class="zhong">
                    <p class="title">${item.name}</p>
                    <p class="pingfen">
                        <span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span><span class="iconfont">&#xe66b;</span>
                    </p>
                    <p class="leixing">${item.basicInfo}</p>
                    <p class="date">${item.releaseDate}</p>
                </div>
                <div class="you">
                    <p class="iconfont">&#xe602;</p>
                    <p>赞一下</p>
                </div>
                </li>
            `).appendTo($("#xihuan ul"));
            onStar($("#xihuan ul li").eq(index).find(".zhong .pingfen").children(), item.score);
        });
    }, "./json/index-guss-u-like.json");
}
