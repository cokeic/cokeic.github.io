// 获取数据
function getdata(f,u) {
    $.ajax({
        type: "get",
        url: u,
        async: true,
        success: function (res) {
            f(res);
            
        },
        error: function (err) {
            console.log(err);
        }
       
    })
    
}

// 点亮星星
function onStar(star,score){
    if (score === 0) {
        null;
    } else if (score < 2) {
        star.eq(0).css("color","orange");
    } else {
        var l = score / 2;
        for (var i = 0; i < Math.floor(l); i++) {
            star.eq(i).css("color","orange");
        }
    }
}

// 跳转页面
$("#shouye").click(function() {
    location.href = "./index.html"
})

$("#sousuo").click(function() {
    location.href = "./search.html"
})

$("#wode").click(function() {
    location.href = "./wode.html"
})