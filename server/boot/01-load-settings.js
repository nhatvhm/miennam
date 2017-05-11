'use strict';

module.exports = function (app) {

  var Setting = app.models.Setting;

  function loadDefaultSettings() {
    console.error('Creating default settings');

    var settings = [{
      type: 'string',
      Key: 'appName',
      Value: 'Loopback Admin'
    }, {
      type: 'select',
      Key: 'appTheme',
      Value: 'skin-blue',
      options: [
        'skin-blue',
        'skin-black'
      ]
    }, {
      type: 'select',
      Key: 'appLayout',
      Value: 'fixed',
      options: [
        'skin-blue',
        'not-fixed'
      ]
    }, {
      type: 'string',
      Key: 'formLayout',
      Value: 'horizontal'
    }, {
      type: 'int',
      Key: 'formLabelSize',
      Value: 3
    }, {
      type: 'int',
      Key: 'formInputSize',
      Value: 9
    }, {
      type: 'boolean',
      Key: 'com.module.users.enable_registration',
      Value: true
    }];

    settings.forEach(function (setting) {
      Setting.create(setting, function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  function loadExistingSettings() {
    console.error('Loading existing settings');

    Setting.find(function (data) {
      console.log(data);
    });
  }


  Setting.count(function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result < 1) {
      loadDefaultSettings();
    } else {
      loadExistingSettings();
    }
  });


};
