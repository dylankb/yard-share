import Ember from 'ember';

export default Ember.Component.extend({
  loginOwnerForm: false,
  actions: {
    loginOwnerFormShow() {
      this.set('loginOwnerForm', true);
    },

    ownerLogin() {
      var params = {
        username: this.get('ownerUsername') || "",
        password: this.get('ownerPassword') || ""
      };
      this.set('loginOwnerForm', false);
      this.sendAction('ownerLogin', params);
      this.set('ownerUsername', "");
      this.set('ownerPassword', "");
    }
  }
});
