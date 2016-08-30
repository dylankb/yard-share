import Ember from 'ember';

export default Ember.Component.extend({
  loginRenterForm: false,
  actions: {
    loginRenterFormShow() {
      this.set('loginRenterForm', true);
    },
    renterLogin() {
      var params = {
        username: this.get('username') || "",
        password: this.get('password') || ""
      };
      this.set('loginRenterForm', false);
      this.sendAction('renterLogin', params);
    }
  }
});
