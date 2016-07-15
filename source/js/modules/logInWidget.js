'use strict';

module.exports = function (){

  var
      sendButton = '.bottom-form--log-in .buttons-panel__item--send',
      form = $(sendButton).closest('.log-in-form'),
      fieldsForm = form.find('.form-field'),
      capcha = form.find('.human-status'),
      isSendedFields = false,
      isSendedCapcha = false;

  var validateField = function(data) {

    if(data === "") {
      return {
        status: false,
        message: 'Это поле не должно быть пустым'
      }
    }

    return {
      status: true
    }

  };

  var setMessage = function(content) {

    $('.qtip-container').text(content);
    $('.qtip-container').animate({
      opacity: 1
    }, 1000, function () {
      $(this).animate({
        opacity: 0
      }, 5000);
    });
  };

  var setTooltips = function() {

    fieldsForm
      .on('input', function(){
        var fieldId = $(this).attr('id'),
            fieldData = $(this).val();
        if(!validateField(fieldData).status) {
          fieldsForm.filter('#' + fieldId).qtip({
            content: validateField(fieldData).message,
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
        isSendedCapcha = false;
      } else if (!isChecked && (value === 'human')) {
        isSendedCapcha = false;
      }
    });

  };

  var getFormStatus = function() {

    setTooltips();
    setHumanStatus();

    if(isSendedFields && isSendedCapcha) {
      $(sendButton).attr('disable', false);
      return true;
    } else {
      $(sendButton).attr('disable', true);
      return false;
    }

    // console.log(isSendedFields, '---', isSendedCapcha);
  };

  var sendData = function() {
    
    $(sendButton).on('click', function(event) {
      event.preventDefault();

      if(!getFormStatus()) {
        fieldsForm.each(function() {
          var fieldId = $(this).attr('id'),
              fieldData = $(this).val();
          if(!validateField(fieldData).status) {
            fieldsForm.filter('#' + fieldId).qtip({
              content: validateField(fieldData).message,
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
          }
        });
      } else {
        var data = {};
        fieldsForm.each(function() {
          data[$(this).attr('name')] = $(this).val();
        });
        data = JSON.stringify(data);
        $.ajax({
          type: "post",
          url: "/welcome/login",
          data: {
            data: data
          },
          success: function (response) {
            var data = $.parseJSON(response);
            if(!data.status) {
              setMessage(data.message)
            } else {
              window.location.replace('/admin');
            }
          }
        });
      }
    });
  
  };
  
  return {
    init: function() {

      $('.log-in-form').on('change input', function () {
        getFormStatus();
      });

      sendData();

    }
  }
};