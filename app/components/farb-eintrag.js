"use strict";

app.component("farbEintrag", {
    templateUrl: "components/farb-eintrag.html",
    controller: "FarbEintragController",
    bindings: {
        farbObj: "<"
    }
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "farb-eintrag",
        url: "/farb-eintrag",
        component: "farbEintrag"
    });

    // $urlRouterProvider.otherwise("/farb-eintrag");
});


app.controller("FarbEintragController", function ($log) {

    $log.debug("FarbEintragController()");

});
