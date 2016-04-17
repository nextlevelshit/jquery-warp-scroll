/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var Warp = window.Warp || {};

    Warp = (function() {

        var instanceUid = 0;

        console.log('DOM');

    });

    $.fn.warp = function() {
        var that = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = that.length,
            i,
            ret;

        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') {
                that[i].warp = new Warp(that[i], opt);
            } else {
                ret = that[i].warp[opt].apply(that[i].warp, args);
                if (typeof ret != 'undefined') return ret;
            }
        }
        return that;
    }
}));