import css from './css/main.css';
import sass from './css/style.scss';
import info from '../info.json'
// import $ from 'jquery';

var a=0;
setTimeout(function(){
    var path = require("path");
    console.log(path.resolve(__dirname,'dist'));
},1000);
var str ="hello123";
var oH1 = document.getElementsByTagName("h1")[0];
oH1.innerHTML = "hello world!"

let bbb = "fellow20";


let obj = {
    test:()=>{
        console.log("11");
        let aaaaaa;
    }
}
console.log(obj+"hello");

$(".abc").html(`姓名：${info.name}年龄：${info.age}学校：${info.school}`);

