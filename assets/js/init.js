$(function() {
  $('[tap]').tap(function() {
    if($(this).attr('tap'))
    {
      eval($(this).attr('tap'));
    }
  });
  
  var setTextareaState = function(ev) {
    console.log('testing');
                  var $this = $(this), val = $this.val(), placeholder = $this.attr('placeholder');
                  if (ev.type == 'mousedown' && val == placeholder ) {
                          $this.val('');
                  } else if (ev.type == 'mouseout' && val == '' && !!placeholder) {
                          $this.val(plcaeholder);
                  }
          };
  
  // bind .live() event to emulate placeholder behavior on text form elements
  $('form textarea').live('mousedown', setTextareaState).live('mouseout', setTextareaState);

  //  simulate .live() functionality with an event unsupported by .live()
  $('#jqt').bind('pageAnimationEnd', function(e,info){
    console.log(e.target);
    // any code that should be called on page change
    $('textarea').each(function(){
            var placeholder = $(this).attr('placeholder');
            if (placeholder && $(this).val() == '') {
                    $(this).val(placeholder);
            }
    });
  });
});