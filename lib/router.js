// import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams, data) {
    // this.render('layout', 'home');
    BlazeLayout.render('layout', {view: 'home'});
  },
});