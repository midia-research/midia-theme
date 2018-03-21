/*
 * Setup events that are triggered on scroll.
 */



var $ = require('jquery')
  , Headroom = require('../vendor/headroom')



module.exports = function () {
    var header = new Headroom(document.getElementById('primary-navigation-wrapper'), {
        offset : 250
      , tolerance : 5
      , classes: {
            initial: 'animated'
          , pinned: 'fadeInDown'
          , unpinned: 'fadeOutUp'
        }
    })

    header.init()
}

