require(["dialog"],function (dialog) {
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function () {
        dialog.open();
    }
})