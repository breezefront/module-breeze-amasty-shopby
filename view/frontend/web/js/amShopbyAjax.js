define([
    'jquery'    
], function ($) {
    'use strict';
 
    $.mixinSuper('amShopbyAjax', {
        scrollUp: function () {
            var list = $(this.selectors.products_wrapper)[0];
            
            if (this.options.scrollUp === 3 || this.options.scrollUp === 4) {
                setTimeout(() => { // setTimeout uses for better behavior on mobile screen when navigation the filter options.
                    list.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });                              
                }, 200);
            }
        }
    });
});