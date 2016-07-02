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
  
  var setTooltips = function(sendButton) {

    var sendForm = $(sendButton).closest('.form'),
        fieldsForm = sendForm.find('.form-field')

    $('.form-field#name, ' +
      '.form-field#mail, ' +
      '.form-field#message, ' +
      '.form-field#login, ' +
      '.form-field#pass' )
      .on('blur', function(){
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
      });
    
    $(sendButton).on('click', function(event){
      event.preventDefault();
      var isSended = true;
      if(!sendForm.find('.capcha__chekbox:checked').length) {
        isSended = false;
      }
        
      fieldsForm.each(function(){
        var fieldId = $(this).attr('id'),
            fieldData = $(this).val();
        if(!validateField(fieldData, fieldId).status) {
          isSended = false;
          $(fieldId).blur();
        }
      });

      if(isSended) {
        sendForm.submit();
      } else {
        return false;
      }
    });

  };
  
  return {
    init: function() {
      setTooltips('.bottom-form--log-in .buttons-panel__item--send');
      setTooltips('.bottom-form--works .buttons-panel__item--send');
    }
  }
};