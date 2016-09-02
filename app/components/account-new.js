import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAccount() {
      var params = {
        username: this.get('username') || "",
        userType: this.get('userType') || "",
        password: this.get('password') || "",
        image: "http://d1xj9q84qsj30f.cloudfront.net/wp-content/uploads/2013/11/mystery-avatar2.png",
        description: ""
      };
      this.sendAction('createAccount', params);
    }
  }
});
