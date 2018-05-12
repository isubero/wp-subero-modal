# wp-subero-modal
Beautiful interactive modals powered by a JavaScript class.

## Options

* **Title** String  
* **Message** String (Accepts HTML tags)
* **ConfirmButton** Object
  * Text (String)
  * Callback (Function)
* **cancelButton** Object
  * Text (String)
  * Callback (Function)

## Methods
There are just two simple methods: `show()` and `hide()`. You probably guessed what they do.

## Example
```
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
})

exampleModal.show();
```
`hide()` method is called automatically after the confirm or cancel button is clicked.