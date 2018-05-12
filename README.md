# WP Subero Modal
Beautiful interactive modals powered by a JavaScript class.

## Options

* **title** String  
* **message** String (Accepts HTML tags)
* **confirmButton** Object
  * Text (String)
  * Callback (Function)
* **cancelButton** Object
  * Text (String)
  * Callback (Function)

## Methods
There are just two simple methods: `show()` and `hide()`. You probably already guessed what they do.

## Example
``` javascript
let exampleModal = new SuberoModal({
    image: {
      src: "your-image-url-here.jpg"
    },
    title: "This is the modal title",
    message: "You can use <b>html tags</b> here.",
    confirmButton: {
      text: "Ok, I accept",
      callback: function() {
        alert("This is a custom callback!");
      }
    },
    cancelButton: {
        text: "No, thanks"
    }
});

// Fire it up!
exampleModal.show();
```
The `hide()` method is called automatically after the confirm or cancel button is clicked, however you may call `show()` and `hide()` methods at will.