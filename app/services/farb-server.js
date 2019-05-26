"use strict";

app.service("FarbServerService", function ($log, $http, Farbe) {

    $log.debug("FarbServerService()");

    const basicURL = 'http://localhost:1234/colours/';
    const apiURL = 'http://localhost:1234/api/colours';

    this.farbenladen = (sort, params) => {
        if(sort) {
            return $http
                .get(basicURL,
                    {params: params})
                .then(response => {
                    return response.data.map(e => new Farbe(e.id, e.title, e.red, e.green, e.blue, e.hue, e.saturation, e.value));
                })
                .catch(error => {
                    $log.debug("oops, da gabs nen Fehler", error);
                });
        }

        return $http
            .get(apiURL,
                {params: params})
            .then(response => {
                return response.data._embedded.colours.map(e => new Farbe(e._links.self.href, e.title, e.red, e.green, e.blue, e.hue, e.saturation, e.value));
            })
            .catch(error => {
                $log.debug("oops, da gabs nen Fehler", error);
            });
    };

    this.bearbeitet = (id, data) => {
        return $http
            .put(id, data)
            .catch(error => {
                $log.debug("oops, da gabs nen Fehler", error);
            });
    };

});
