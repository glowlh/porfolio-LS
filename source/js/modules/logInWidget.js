'use strict';

module.exports = function (){

  var
      sendButton = '.bottom-form--log-in .buttons-panel__item--send',
      form = $(sendButton).closest('.log-in-form'),
      fieldsForm = form.find('.form-field'),
      capcha = form.find('.human-status'),
      isSendedFields = false,
      isSendedCapcha = false;

  var validateField = function(data, type) {

    if(data === "") {
      return {
        status: false,
        message: 'Это поле не должно быть пустым'
      }
    }

    if(type === 'checkbox') {

    }

    return {
      status: true
    }

  }

  var setTooltips = function() {

    fieldsForm
      .on('input', function(){
        var fieldId = $(this).attr('id'),
            fieldData = $(this).val();
        if(!validateField(fieldData).status) {
          fieldsForm.filter('#' + fieldId).qtip({
            content: validateField(fieldData, fieldId).message,
            position: {
              my: 'left center',
              at: 'right center'
            },
            show: {
              ready: true
            },
            hide: {
              event: false
            },
            style: {
              classes: 'qtip-tipsy qtip-tipsy--custom'
            }
          });
        } else {
          fieldsForm.filter('#' + fieldId).qtip('destroy');
        }

        setFieldsStatus();

      });

  };

  var setFieldsStatus = function() {

    isSendedFields = true;

    fieldsForm.each(function(){
      var fieldData = $(this).val();
      if(!validateField(fieldData).status) {
        isSendedFields = false;
      }
    });

  };

  var setHumanStatus = function() {

    isSendedCapcha = true;

    capcha.each(function(){
      var value = $(this).val(),
          isChecked = $(this).is(':checked');
      if(isChecked && (value === 'no')) {
        console.log('hhh');
        isSendedCapcha = false;
      } else if (!isChecked && (value === 'human')) {
        isSendedCapcha = false;
      }
    });

  };

  var setFormStatus = function() {

    setTooltips();
    setHumanStatus();

    if(isSendedFields && isSendedCapcha) {
      $(sendButton).attr('disable', false);
    } else {
      $(sendButton).attr('disable', true);
    }

    console.log(isSendedFields, '---', isSendedCapcha);
  };

  return {
    init: function() {

      $('.log-in-form').on('change input', function () {
        setFormStatus();
      });

    }
  }
};