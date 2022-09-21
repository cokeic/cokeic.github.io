// 判断是否为移动端
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
function rand(min,max){
    return Math.round(Math.random()*(max-min)+min);
  }

  // 碰撞检测
  function isCrash(a, b) {
    var l1 = a.offsetLeft;
    var t1 = a.offsetTop;
    var r1 = l1 + a.offsetWidth;
    var b1 = t1 + a.offsetHeight;
    var l2 = b.offsetLeft;
    var t2 = b.offsetTop;
    var r2 = l2 + b.offsetWidth;
    var b2 = t2 + b.offsetHeight;
    if (r2 < l1 || b2 < t1 || r1 < l2 || b1 < t2) {
        // 不碰撞
        return false;
    } else {
        // 碰撞
        return true;
    }
}