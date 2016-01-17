import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            console.log(formData);
            var datum_temp = new Date();
			var datum = datum_temp.toLocaleString(); 
            var error = this.store.createRecord('error', Object.assign({
                date: datum,
                location: 'Webfejlesztés 2.',
                description: 'Déli épület 0-001',
            }, formData));
            
            error.save();
            this.transitionToRoute('games.list');
        }
    }
});
