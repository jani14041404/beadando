define('gyak09/pods/error/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    var ErrorModel = DS['default'].Model.extend({
        date: DS['default'].attr(),
        location: DS['default'].attr(),
        description: DS['default'].attr()
    });

    ErrorModel.reopenClass({
        FIXTURES: [{
            id: 1,
            date: '1212-12-12',
            location: 'pc6',
            description: 'rossz'
        }, {
            id: 2,
            date: '1212-12-12',
            location: 'pc7',
            description: 'még rosszabb'
        }]
    });

    exports['default'] = ErrorModel;

});