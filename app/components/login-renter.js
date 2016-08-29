import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    renterLogin() {
      var params = {
        username: this.get('username') || "",
        password: this.get('password') || ""
      };
      this.sendAction('renterLogin', params);
    }
  }
});
