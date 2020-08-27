<?php
/*
Plugin Name: WP Subero Modal
Plugin URI:  http://isaiassubero.com
Description: Beautiful interactive modals powered by a Js class.
Version:     1.2
Author:      Isaías Subero
Author URI:  http://isaiassubero.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: wp-subero-modal
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

		// Auto update
		add_filter( 'init', array($this, 'update') );
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
        wp_enqueue_style( 'subero-modal-styles', WP_PLUGIN_URL . '/wp-subero-modal/assets/css/style.css', null, '010220' );
        wp_enqueue_script( 'subero-modal-scripts', WP_PLUGIN_URL . '/wp-subero-modal/assets/js/scripts.js', null, '010220', true );
        wp_localize_script( 'subero-modal-scripts',  'suberoModal_ajax_object', array(
            'ajax_url'      => admin_url( 'admin-ajax.php' ),
            'plugin_url'    => WP_PLUGIN_URL . '/wp-subero-modal'
        ) );
	}

	/**
	 * Update class
	 */
	public function update() {
		require_once 'class-wp-subero-update.php';
		
		// set auto-update params
		$product_name			= 'wp-subero-modal';
		$plugin_current_version = '1.1';
		$plugin_remote_path     = 'http://updates.isaiassubero.com';
		$plugin_slug            = plugin_basename(__FILE__);
		$license_user           = 'contactosubero@gmail.com';
		$license_key            = '123456789';

		new WP_Subero_Autoupdate( $product_name, $plugin_current_version, $plugin_remote_path, $plugin_slug );
	}
}

$GLOBALS['subero_modal'] = new SuberoModal();