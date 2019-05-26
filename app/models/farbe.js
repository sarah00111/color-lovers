"use strict";

app.factory("Farbe", function () {

    function Farbe(id, name, r, g, b, h, s, v) {
        this.id = id;
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
        this.h = h;
        this.s = s;
        this.v = v;

        function hex(wert) {
            return angular.isNumber(wert)
                ? ("0" + wert.toString(16)).substr(-2)
                : "??";
        }

        this.hexWert = () => {
            return ("#" + hex(this.r) + hex(this.g) + hex(this.b)).toUpperCase();
        };

        this.helligkeit = () => {
            return (0.2126*this.r + 0.7152*this.g + 0.0722*this.b);
        };
    }

    // Relativer Pfad im REST-API
    Farbe.path = "farbes";

    return Farbe;
});
