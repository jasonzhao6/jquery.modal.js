# jQuery.modal.js
This plugin creates a modal with an X while dimming the background.

It has been tested in IE7-9 and weighs less than a kilobyte.

You can download it in a zip file or view source on GitHub.

## Usage
HTML
```html
<button id='btn1' data-modal-id='#div1'>Click</button>

<div id='div1' class='modal'>
  <span class='close'>X</span>
  <p>Lorem ipsum dolor.</p>
</div>
```
CSS
```css
.modal {
  display: none;
}
.modal .close {
  position: absolute;
  right: 10px;
  top: 10px;
}
```
JavaScript
```html
<!-- import jQuery -->
<!-- import jQuery.modal -->
<script type='text/javascript'>
$(function() {
  $('#btn1').modal();
});
</script>
```
