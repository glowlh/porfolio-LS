var template = require('jade!./template.pug');

module.exports = function() {

  var rootEl = $('.edit');
  var options = [];
  var ranges = [];


  var init = function() {
    _loadRanges()
      .then(function(response) {
        _readRanges(response);
      })
      .then(function() {
        _loadAbout()
          .then(function(response) {
            _readAbout(response);
          })
          .then(function() {
            _render(template, options);
          });
      });
  };

  var _loadRanges = function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: "post",
        url: "/admin/ranges",
        error: function() {
          reject('Cant fetch response from `ranges`')
        },
        success: function(response) {
          var data = $.parseJSON(response);
          resolve(data);
        }
      })
    }).catch(function(error) {
      console.error(error);
    });
  };

  var _readRanges = function(response) {
    ranges = [];
    response.forEach(function(range){
      ranges.push(range.skill_range);
    });
  };

  var _loadAbout = function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: "post",
        url: "/admin/about",
        error: function() {
          reject('Cant fetch response from `about`')
        },
        success: function (response) {
          var data = $.parseJSON(response);
          resolve(data);
        }
      });
    }).catch(function(error) {
      console.error(error);
    });
  };

  var _readAbout = function(response) {
    var data = [];
    ranges.forEach(function(range) {
      var skilles = response.filter(function(item) {
        return item.skill_range === range;
      });
      data.push({
        skillRange: range,
        skilles: skilles
      });
    });
    options = {
      skills: data
    };
  };

  var _render = function(template, options) {
    rootEl.html(template(options));
  };

  var save = function() {
    var fields = $('.input__field');
    var skilles = {};

    if(!fields.length) {
      throw new Error('Fields haven\'t founded');
    }
    fields.each(function() {
      skilles[$(this).attr('data-skill-id')] = $(this).val();
    });

    var data = JSON.stringify(skilles);
    $.ajax({
      type: "post",
      url: "/admin/save_about",
      data: {
        data: data
      },
      success: function (response) {
        var data = $.parseJSON(response);
        console.log(data.message);
      }
    });
  };

  return {
    init: init,
    save: save
  }
}();