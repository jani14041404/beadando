import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),

    actions: {
        submit: function submit() {
            if (!this.validate()) {
                return;
            }
            this.get('onSave')({
                location: this.$('#helyszin').val(),
                description: this.$('#leiras').val()
            });
        }
    },
    validate: function validate() {
        var location = this.$('#helyszin').val();
        var description = this.$('#leiras').val();

        this.set('errors.location', location === '' ? 'Játékleírás kitöltése kötelező' : '');
        this.set('errors.description', description === '' ? 'Játékleírás kitöltése kötelező' : '');

        return this.get('errors.location') === '' && this.get('errors.description') === '';
    }
});