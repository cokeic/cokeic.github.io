// 公用方法

// 判断是否是移动端
function isPhone() {
    var arr = ["iPhone", "iPad", "Android"];
    for (var i = 0; i < arr.length; i++) {
        if (navigator.userAgent.includes(arr[i])) {
            return true;
        }
    }
    return false;
}

// 随机函数
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}