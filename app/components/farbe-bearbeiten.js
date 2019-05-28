"use strict";

app.component("farbeBearbeiten", {
    templateUrl: "components/farbe-bearbeiten.html",
    controller: "FarbeBearbeitenController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "farbe-bearbeiten",
        params: {obj: null},
        component: "farbeBearbeiten"
    });

    // $urlRouterProvider.otherwise("/farbe-bearbeiten");
});


app.controller("FarbeBearbeitenController", function ($log, Farbe, $stateParams,FarbServerService, $state) {

    $log.debug("FarbeBearbeitenController()");


    this.obj = new Farbe(
        $stateParams.obj.id,
        $stateParams.obj.name,
        $stateParams.obj.r,
        $stateParams.obj.g,
        $stateParams.obj.b,
        $stateParams.obj.h,
        $stateParams.obj.s,
        $stateParams.obj.v,
    );

    this.senden = () => {
        let data = {
            'title': this.obj.name,
            'red': this.obj.r,
            'green': this.obj.g,
            'blue': this.obj.b
        };

        FarbServerService.bearbeitet(this.obj)
            .then(response => {
                $state.go("farben-anzeige");
            });


    }

});
