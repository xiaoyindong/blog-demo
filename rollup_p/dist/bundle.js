(function () {
    'use strict';

    const log = msg => {
        console.log(msg);
    };

    var message = {
        hi: 'Hey Guys, I am yd~'
    };

    var name = "rollup_p";
    var version = "1.0.0";

    const msg = message.hi;
    log(msg);

    log(name);
    log(version);

}());
