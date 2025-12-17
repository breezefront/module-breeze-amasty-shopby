define([
    'jquery',
    'underscore'
], function ($, _) {
    'use strict';

    $.mixinSuper('amShopbyFilterSlider', {
        _create: function () {
            this._initializeWidget();
            $.mage.amShopbyFilterAbstract.prototype.setCollectFilters(this.options.collectFilters);
        },

        _setTooltipValue: function () {},
        _initColors: function () {},

        _initSlider: function (fromLabel, toLabel) {
            const self = this,
                range = $('<range-slider>'),
                minPrice = this.options.min * +this.options.curRate,
                maxPrice = this.options.max * +this.options.curRate,
                fromPrice = fromLabel,
                toPrice = toLabel,
                step = (this.options.step ? this.options.step : 1) * +this.options.curRate,
                onPriceChange = _.debounce(function (newFrom, newTo) {
                    self._setValue(newFrom, newTo, true);
                }, 500),
                mainColor = this.options.colors.main || '#000000',
                hexToRgb = hex =>
                    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
                        .substring(1).match(/.{2}/g)
                        .map(x => parseInt(x, 16));

            this.slider.hide();

            range.attr('style', '--thumb-bg:' + hexToRgb(mainColor).join(' '));

            range
                .attr('min', minPrice)
                .attr('max', maxPrice)
                .attr('value', [fromPrice, toPrice].join('-'))
                .attr('step', step)
                .insertBefore(this.slider)
                .on('range:input', function (event) {
                    var from  = event.target.value[0],
                        to = event.target.value[1];

                    self._onSlide(event, [{values: [from, to]}]);

                    onPriceChange(from, to);
                });
        },

        _onSlide: function (event, data) {
            return this._super(event, ...data);
        }
    });
});
