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
  
 ## Example
```
let exampleModal = New SuberoModal({
  title: "This is the modal title"
  message: "You can use <b>html tags</b> here.",
  confirmButton: {
    text: "Yes, I accept"
    callback: function() {
      alert("This is a custom callback!");
    }
  }
})
```
