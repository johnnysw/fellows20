define(function () {
    function slider() {
        this.$box = $('<div class="slider-box"></div>');
        this.$img = $('<div class="slider-img"></div>');
        this.$nav = $('<div class="slider-nav"></div>');
        this.$btn = $('<div class="slider-btn"></div>');
        this.$ul = $('<ul></ul>');
        this.$prv = $('<li>&lt;</li>');
        this.$next = $('<li>&gt;</li>');
        this.defaultSettings = {
            arr:["img/1","img/2","img/3","img/4"],
            time:1000,
            content:"#div1"

        }
    }
    slider.prototype.init =function (settings) {
        console.log(settings);
        $.extend(this.defaultSettings,settings);

        this.$box.append(this.$img).append(this.$nav).append(this.$btn);
        this.$ul.append(this.$prv).append(this.$next);
        this.$btn.append(this.$ul);
        var imgHtml = "<ul>";
        var navHtml = "<ul>";
        console.log(this.defaultSettings);
        for(var i=0;i<this.defaultSettings.arr.length;i++){
            imgHtml+='<li><img src="'+this.defaultSettings.arr[i]+'.jpg" alt=""></li>'
            navHtml+='<li>'+(i+1)+'</li>';
        }
        imgHtml+="</ul>";
        navHtml+="</ul>";
        this.$img.append(imgHtml);
        this.$nav.append(navHtml);
        $(this.defaultSettings.content).append(this.$box);
        $(this.$img).children("ul").children("li").eq(0).addClass("active");
        var globalIndex = 0;
        var This = this;
//    var timer = setInterval(function () {
//        console.log(globalIndex);
//        if(globalIndex>3){
//            globalIndex=0;
//        }
//        changeImg(globalIndex);
//        globalIndex++;
//    },1000);
        this.changeImg=function(index) {
            console.log(This.$nav);
            $(This.$img).children("ul").children("li").removeClass("active").eq(globalIndex).addClass("active");
            $(This.$nav).children("ul").children("li").removeClass("active").eq(globalIndex).addClass("active");
        }
        $(this.$nav).children("ul").children("li").hover(function(){
            console.log($(this).index());
//        clearInterval(timer);
            globalIndex=$(this).index();
            This.changeImg();
        },function () {
            console.log("out");
        })
    };


    return slider
})