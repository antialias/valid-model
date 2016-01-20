"use strict";
var Model = require('backbone-model').Model;
var assign = require('lodash.assign');
var ValidModel = module.exports = Model.extend({
    set : function (attributes, options) {
        var name;
        var val;
        if ("string" === typeof attributes) {
            name = attributes;
            val = options;
            attributes = {};
            attributes[name] = val;
            options = {};
        }
        return ValidModel.__super__.set.call(this, attributes, assign({validate: true}, options));
    }
});
