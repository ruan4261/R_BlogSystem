var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
    paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
RADIUS = 100,
    fallLength = 500,
    tags = [],
    angleX = Math.PI / 1000,
    angleY = Math.PI / 1000,
    CX = paper.offsetWidth / 2,
    CY = paper.offsetHeight / 2,
    EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
    EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

function getClass(className) {
    var ele = document.getElementsByTagName("*");
    var classEle = [];
    for (var i = 0; i < ele.length; i++) {
        var cn = ele[i].className;
        if (cn === className) {
            classEle.push(ele[i]);
        }
    }
    return classEle;
}

function innit() {
    for (var i = 0; i < tagEle.length; i++) {
        var a, b;
        var k = (2 * (i + 1) - 1) / tagEle.length - 1;
        var a = Math.acos(k);
        var b = a * Math.sqrt(tagEle.length * Math.PI);
        // var a = Math.random()*2*Math.PI;
        // var b = Math.random()*2*Math.PI;
        var x = RADIUS * Math.sin(a) * Math.cos(b);
        var y = RADIUS * Math.sin(a) * Math.sin(b);
        var z = RADIUS * Math.cos(a);
        var t = new tag(tagEle[i], x, y, z);
        tagEle[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
        tags.push(t);
        t.move();
    }
}

var tag = function (ele, x, y, z) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
}

tag.prototype = {
    move: function () {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        this.ele.style.fontSize = 20 * scale + "px";
        this.ele.style.opacity = alpha + 0.5;
        this.ele.style.filter = "alpha(opacity = " + (alpha + 0.5) * 100 + ")";
        this.ele.style.zIndex = parseInt(scale * 100);
        this.ele.style.left = this.x + CX - this.ele.offsetWidth / 2 + "px";
        this.ele.style.top = this.y + CY - this.ele.offsetHeight / 2 + "px";
    }
}

let tagForEach = function (tags, callback) {
    for (var i = 0; i < tags.length; i++) {
        callback.call(tags[i]);
    }
}

function animate() {
    setInterval(function () {
        rotateX();
        rotateY();
        tagForEach(tags, function () {
            this.move();
        })
    }, 10);
}

/*
if ("addEventListener" in window) {
    paper.addEventListener("mousemove", function (event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
        // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
        angleY = x * 0.0001;
        angleX = y * 0.0001;
    });
} else {
    paper.attachEvent("onmousemove", function (event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        angleY = x * 0.0001;
        angleX = y * 0.0001;
    });
}
*/

function rotateX() {
    var cos = Math.cos(angleX);
    var sin = Math.sin(angleX);
    tagForEach(tags, function () {
        var y1 = this.y * cos - this.z * sin;
        var z1 = this.z * cos + this.y * sin;
        this.y = y1;
        this.z = z1;
    })

}

function rotateY() {
    var cos = Math.cos(angleY);
    var sin = Math.sin(angleY);
    tagForEach(tags, function () {
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
    })
}

innit();
animate();