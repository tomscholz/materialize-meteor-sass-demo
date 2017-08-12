import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import _Hammer from "hammerjs"
import "/node_modules/materialize-css/dist/js/materialize";
import './main.html';

// made global
Hammer = _Hammer;
Materialize = window.Materialize;

Template.navbar.onRendered(function navbarOnCreated() {
  $('.button-collapse').sideNav();
});

Template.content.onCreated(function buttonOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.content.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.content.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
