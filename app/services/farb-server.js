"use strict";

app.service("FarbServerService", function ($log, $http, Farbe) {

    $log.debug("FarbServerService()");

    const basicURL = 'http://localhost:1234/colours/';
    const apiURL = 'http://localhost:1234/api/colours';

    this.farbenladen = (params) => {

        return $http
            .get(basicURL,
                {params: params})
            .then(response => {
                return response.data.map(e => new Farbe('http://localhost:1234/api/colours/' + e.id, e.title, e.red, e.green, e.blue, e.hue, e.saturation, e.value));
            })
            .catch(error => {
                $log.debug("oops, da gabs nen Fehler", error);
            });


        /*$log.debug("Params: ", params);
        return $http
            .get(apiURL,
                {params: params})
            .then(response => {
                return response.data._embedded.colours.map(e => new Farbe(e._links.self.href, e.title, e.red, e.green, e.blue, e.hue, e.saturation, e.value));
            })
            .catch(error => {
                $log.debug("oops, da gabs nen Fehler", error);
            });*/
    };

    this.bearbeitet = (obj) => {
        let data = {
            title: obj.name,
            red: obj.r,
            green: obj.g,
            blue: obj.b,
        };
        $log.debug("Data: ", data);
        return $http
            .put(obj.id, data)
            .then(response => {
                $log.debug("Farbe hinzugefügt ", response);
            })
            .catch(error => {
                $log.debug("oops, da gabs nen Fehler", error);
            });
    };

});
