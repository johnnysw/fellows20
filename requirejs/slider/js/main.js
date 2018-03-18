require(["slider"],function (Slider) {
    var slider1 = new Slider();
    slider1.init();
    var settings = {
        arr:["img/1","img/2","img/3"],
        time:1000,
        content:"#div2"
    };
    var slider2= new Slider();
    slider2.init(settings);

});