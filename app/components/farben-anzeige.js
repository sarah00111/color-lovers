"use strict";

app.component("farbenAnzeige", {
    templateUrl: "components/farben-anzeige.html",
    controller: "FarbenAnzeigeController",
    bindings: {}
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "farben-anzeige",
        url: "/farben-anzeige",
        component: "farbenAnzeige"
    });

    $urlRouterProvider.otherwise("/farben-anzeige");
});


app.controller("FarbenAnzeigeController", function ($log, FarbServerService) {

    $log.debug("FarbenAnzeigeController()");

    this.$onInit = () => {
        FarbServerService.farbenladen({size: 20})
            .then(response => {
                this.farbenAry = response;
            });

    }

    this.suchen = () => {
        FarbServerService.farbenladen({title: this.suchParam})
            .then(response => {
                this.farbenAry = response;
            });
    }

    this.sortieren = (param) => {
        FarbServerService.farbenladen({sort: param})
            .then(response => {
                this.farbenAry = response;
            });
    }
});
