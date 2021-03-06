import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export default Ember.Controller.extend({
  flashMessages: inject.service(),

  addedFile(file) {
    console.log(file,this);
    const flashMessages = Ember.get(this, 'flashMessages');
    flashMessages.info(`File "${file.name}" Uploaded.`);
  }
});
