define([], function () {
    'use strict';

    return function (config, element) {
        $(element.firstElementChild).pagebuilderSlider();
    };
});
