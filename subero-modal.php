<?php
/*
Plugin Name: Subero Modal
Plugin URI:  http://isaiassubero.com
Description: Launch modals on a Js event.
Version:     1.0
Author:      Isaías Subero
Author URI:  http://isaiassubero.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: woocommerce-custom-emails
Domain Path: /languages
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class SuberoModal {
    public function __construct() {
        // Define plugin constants
        $this->define_constants();
        
        // Enqueue scripts
        add_action( 'init', array($this, 'load_scripts') );

        // Insert modal div at footer
        add_action( 'wp_footer', array($this, 'insert_modal') );

    }

    /**
	* Define constant if not already set.
	*
	* @param  string $name
	* @param  string|bool $value
	*/
	private function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}
	/**
	* Define plugin constants
	*/
	private function define_constants() {
		$this->define( 'SUBEROMODAL_ABSPATH', dirname( __FILE__ ) . '/' );
	}

    public function load_scripts() {
        wp_enqueue_style( 'subero-modal-styles', WP_PLUGIN_URL . '/subero-modal/assets/css/style.css' );
        wp_enqueue_script( 'subero-modal-scripts', WP_PLUGIN_URL . '/subero-modal/assets/js/scripts.js', array('jquery'), '1.0', true );
    }

    public function insert_modal() {
        ?>
            <div id="subero_modal" class="subero_modal hidden">
                <div class="subero_modal_content">
                    <header class="subero_modal_header">
                        <figure>
                            <img class="subero_modal_icon" src="<?= WP_PLUGIN_URL . '/subero-modal/assets/img/thumb-up-circle.png' ?>" alt="thumb-up icon">
                        </figure>
                        <h4 id="subero_modal_title">Título del modal</h4>
                    </header>
                    <div class="subero_modal_body">
                        <span id="subero_modal_msg" class="subero_modal_body_text">
                            Lorem ipsum dolor sit amet. Este es un texto
                            que será reemplazado más tarde.
                        </span>
                    </div>
                    <footer class="subero_modal_footer">
                        <div class="subero_modal_buttons_wrapper">
                            <a class="subero_modal_btn" href="#" onclick="hide_subero_modal()">¡Bien!</a>
                        </div>
                    </footer>
                </div>
            </div>
        <?php
    }
}

$GLOBALS['subero_modal'] = new SuberoModal();