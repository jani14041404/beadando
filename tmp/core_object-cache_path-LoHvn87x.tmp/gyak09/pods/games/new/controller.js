define('gyak09/pods/games/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newError: function newError(formData) {
                console.log(formData);
                var datum_temp = new Date();
                var datum = datum_temp.toLocaleString();
                var error = this.store.createRecord('error', Object.assign({
                    date: datum,
                    location: 'Webfejlesztés 2.',
                    description: 'Déli épület 0-001'
                }, formData));

                error.save();
                this.transitionToRoute('games.list');
            }
        }
    });

});