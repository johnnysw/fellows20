"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "showInfo",
        value: function showInfo() {
            console.log("\u59D3\u540D\uFF1A" + this.name + "\u5E74\u9F84\uFF1A" + this.age);
        }
    }]);

    return Person;
}();

var person1 = new Person("xiaoming", "17");
person1.showInfo();

var Teacher = function (_Person) {
    _inherits(Teacher, _Person);

    function Teacher(name, age, school) {
        _classCallCheck(this, Teacher);

        var _this = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name, age));

        _this.school = school;
        return _this;
    }

    _createClass(Teacher, [{
        key: "showSchool",
        value: function showSchool() {
            console.log(this.school);
        }
    }]);

    return Teacher;
}(Person);

var teacher1 = new Teacher("Mr.Li", "30", "heida");
teacher1.showInfo();
teacher1.showSchool();

var a = function a(_a) {
    return _a;
};