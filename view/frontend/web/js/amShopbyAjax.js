define([
    'jquery'    
], function ($) {
    'use strict';
 
    $.mixinSuper('amShopbyAjax', {
        scrollUp: function () {
            if (this.options.scrollUp === 3 || this.options.scrollUp === 4) {
                $(document).scrollTop(0);     
            }
        }
    });
});