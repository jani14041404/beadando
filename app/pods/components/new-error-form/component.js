import Ember from 'ember';

export default Ember.Component.extend({
    games: Ember.Object.create(),
    
    actions: {
        submit() {
            if(!this.validate()) {
                return;
            }
            this.get('onSave')({
                location: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
            });
        }
    },
    validate() {
        var location = this.$('#helyszin').val();
        var description = this.$('#leiras').val();
        
        this.set('games.location', location === '' ? 'Játékleírás kitöltése kötelező' : '');
        this.set('games.description', description === '' ? 'Játékleírás kitöltése kötelező' : '');
        
        return this.get('games.location') === '' && this.get('games.description') === '';
    }
});
