module.exports = function() {

  var pattern = {
    name: /^[A-zА-я\s]*$/,
    mail: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
  },
    _that = this;
  
  var validateField = function(data, type) {

    if(data === "") {
      return {
        status: false,
        message: 'Это поле не должно быть пустым'
      }
    }

    if(type === 'name') {
      if(data.search(pattern.name) === -1) {
        return {
          status: false,
          message: 'Имя должно состоять из букв'
        }
      }
    } else if(type === 'mail') {
      if(data.search(pattern.mail) === -1) {
        return {
          status: false,
          message: 'Неверный формат электронной почты'
        }
      }
    } 

    return {
      status: true
    }

  };

  var setMailTip = function(content) {

    $('.qtip-container').text(content);
    $('.qtip-container').animate({
      opacity: 1
    }, 1000, function () {
      $(this).animate({
        opacity: 0
      }, 5000);
    });
  }
  var setFormStatus = function(fields, sendButton) {
    
    var isSended = true;

    fields.each(function(){
      var fieldId = $(this).attr('id'),
        fieldData = $(this).val();
      if(!validateField(fieldData, fieldId).status) {
        isSended = false;
      }
    });

    if(isSended) {
      $(sendButton).attr('disable', false);
    } else {
      $(sendButton).attr('disable', true);
    }
    
  };
  
  var sendData = function(fields, sendButton, form) {

    var isSended = true;
    
    $(sendButton).on('click', function(event){
      event.preventDefault();
      if(!form.find('.capcha__chekbox:checked').length && $('.capcha__chekbox').length) {
        isSended = false;
      }

      fields.each(function(){
        var fieldId = $(this).attr('id'),
            fieldData = $(this).val();
        if(!validateField(fieldData, fieldId).status) {
          isSended = false;
          $(this).qtip({
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
        }
      });

      if($('#linkedForm').length) {
        if (isSended) {
          var data = {};
          fields.each(function() {
            data[$(this).attr('name')] = $(this).val();
          });
          data = JSON.stringify(data);
          $.ajax({
            type: "post",
            url: "../../php/common.php",
            data: {
              data: data
            },
            success: function (response) {
              var data = $.parseJSON(response);
              // setMailTip(data.mailStatus);
              // $(sendButton).attr('disable', true);
              // fields.each(function() {
              //   $(this).val('');
              // });
              
            }
          });
        } else {
          return false
        }
      }
    });
  };
  
  var setTooltips = function(sendButton) {

    var form = $(sendButton).closest('.form'),
        fieldsForm = form.find('.form-field')

    $('.form-field')
      .on('input', function(){
        var fieldId = $(this).attr('id'),
            fieldData = $(this).val();

        if(!validateField(fieldData, fieldId).status) {
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

      setFormStatus(fieldsForm, sendButton);
        
      });

    sendData(fieldsForm, sendButton, form);

  };
  
  return {
    init: function() {
      setTooltips('.bottom-form--log-in .buttons-panel__item--send');
      setTooltips('.bottom-form--works .buttons-panel__item--send');
    }
  }
};