/*jslint browser: true */

var svgns = 'http://www.w3.org/2000/svg';

var Form = function () {
    'use strict';

    return {
        main: function () {
            var svg = document.createElementNS(svgns, 'svg'),
                formRectangle = document.createElementNS(svgns, 'rect'),
                formText = document.createElementNS(svgns, 'text'),
                formTextNode = document.createTextNode('Hi there, Dillon');

            formText.appendChild(formTextNode);
            formRectangle.appendChild(formText);
            svg.appendChild(formRectangle);
            document.body.appendChild(svg);
        }
    };
};

var form = new Form();
form.main();
