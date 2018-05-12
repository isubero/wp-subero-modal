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
* **image** Array
  * src (String - The url of the image)
  * width (Integer)
  * height (Integer)
  * classes (Array with aditional classes for the image)


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

## WordPress example
Once you installed the plugin, simply use the appropriate WordPress Hook for your modal. For the sake of simplicity, let's use the `wp_footer` hook and display a modal if the user is not authenticated.

``` php
add_action('wp_footer', 'my_modal');

function my_modal() {
  
  if ( !is_user_logged_in() ) : ?>
    <script>
      // Make sure DOM is ready (SuberoModal class has loaded)
      document.addEventListener("DOMContentLoaded", function(event) { 
        
        let myModal = new SuberoModal({
            title: "Login",
            message: "Looks like you are not authenticated.",
            confirmButton: { 
              text: "Login",
              callback: function() { 
                window.location = "www.yoursite.com/wp-login.php";
              }
            },
            cancelButton: { text: "Close" }
        });

        // Display the modal
        myModal.show();
      });
    </script>
  <?php endif;
}
```