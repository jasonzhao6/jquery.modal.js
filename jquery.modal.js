/*! jQuery.modal v1.0 by Jason Zhao | https://github.com/jasonzhao6 */
(function($) {
  $.fn.extend({
    modal: function() {
      return this.each(function() {
        $(this).click(function(e) {
          var $modal_div = $($(this).data('modal-id'));
          // if target modal div doesn't exist
          if( $modal_div.size() === 0) { return; }
          // if target modala div is already displayed
          if( $modal_div.css('display') === 'block' ) { return; }
          var $dim_div = $('#jquery-modal-dim');
          // initial setup of dim overlay and close click bindings
          if( $dim_div.size() === 0 ) {
            $('body').append("<div id='jquery-modal-dim'></div>");
            $dim_div = $('#jquery-modal-dim');
            $dim_div.css({
              'background': '#000',
              'display': 'none',
              'height': '100%',
              'left': '0',
              'position': 'fixed',
              'top': '0',
              'width': '100%',
              'z-index': '1'
            });
            $('#jquery-modal-dim, .modal .close').click(function() {
              close();
            });
          }
          $dim_div.fadeTo(200, .5);
          var modal_height = $modal_div.outerHeight();
          var modal_width = $modal_div.outerWidth();
          $modal_div.css({
            'display': 'block',
            'left': '50%',
            'margin-left': -(modal_width / 2) + 'px',
            'margin-top': -(modal_height / 2 + 50) + 'px',
            'opacity': '0',
            'position': 'fixed',
            'top': '50%',
            'z-index': '2'
          });
          $modal_div.fadeTo(200, 1);
          e.preventDefault();
        });
      });
      function close() {
        $('.modal').fadeOut(200);
        $('#jquery-modal-dim').fadeOut(200);
      }
    }
  });
})(jQuery);