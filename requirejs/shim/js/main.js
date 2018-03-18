require.config({
    shim:({
        aa:{
            deps:["bb"],
            exports: 'aa'
        }
    })
});
require(["aa"],function (aa) {
    aa.con();
});