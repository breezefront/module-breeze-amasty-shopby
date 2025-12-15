define([
    'jquery'
], function ($) {
    'use strict';

    $.mixinSuper('amShopbyFilterFromTo', {
        onSyncChange: function (event, values) {
            this._super(event, ...values);
        }
    });
});
