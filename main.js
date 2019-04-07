var kai = true;  //弄个开关 防止一划到底
var i = 0;		//当前页面的数值
var oUl = document.getElementsByTagName("ul")[0];

// 滚轮事件
document.addEventListener('mousewheel', function (ev) {
    var ev = window.event || ev;
    if (kai) {
        if (ev.wheelDelta < 0) {  //判断是上是下
            i++;
            if (i > 4) { i = 4 };
            runn(i)
            activeIcon(i)
        }
        if (ev.wheelDelta > 0) {
            i--;
            if (i < 0) { i = 0 };
            runn(i)
            activeIcon(i)
        }
    }
})

//键盘事件
document.onkeydown = function (event) {
    if (event.keyCode == 38) {
        i--;
        if (i < 0) { i = 0 };
        runn(i)
        activeIcon(i)

    }
    if (event.keyCode == 40) {
        i++;
        if (i > 4) { i = 4 };
        runn(i)
        activeIcon(i)

    }
}

//翻动页面
function runn(i) {
    kai = false;
    setTimeout(function () {
        oUl.style.top = -i * 100 + 'vh';
    }, 0);

    setTimeout(function () {
        kai = true;
    }, 500);
}

//搞一下导航条

//这是定位跳转
var navItem = document.getElementsByClassName("nav")[0];
var icons = navItem.getElementsByTagName("i");

navItem.addEventListener("click", function (e) {
    i=e.srcElement.getAttribute("dataIndex");
    //开始跳转
    activeIcon(i)
    runn(i)
})

// 修改激活图标 修改点的样式
function activeIcon(i){
    for (let i = 0; i < icons.length; i++) {
        icons[i].className=""
    }
    icons[i].className="active";

    for (let i = 0; i < icons.length; i++) {
        icons[i].style.backgroundImage=""
    }
    icons[i].style.backgroundImage='url("skill/icon'+i+'.svg")'
}
activeIcon(i)

//