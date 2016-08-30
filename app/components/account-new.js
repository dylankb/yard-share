import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAccount() {
      var params = {
        username: this.get('username') || "",
        userType: this.get('userType') || "",
        password: this.get('password') || "",
        image: "",
        description: ""
      };
      this.sendAction('createAccount', params);
      debugger;
    }
  }
});
