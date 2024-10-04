<?php
/**
 * Plugin Name:       Lizardberg
 * Description:       Gutenberg image blocks that does better at scaling
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.1
 * Author:            Jack Whitworth
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lizardberg
 *
 * @package Lizardberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function lizardberg_lizardberg_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'lizardberg_lizardberg_block_init' );

/**
 * Plugin updater handler function.
 * Pings the Github repo that hosts the plugin to check for updates.
 */
function lizardberg_check_for_plugin_update( $transient ) {
    // If no update transient or transient is empty, return.
    if ( empty( $transient->checked ) ) {
        return $transient;
    }

    // Plugin slug, path to the main plugin file, and the URL of the update server
    $plugin_slug = 'lizardberg/lizardberg.php';
    $update_url = 'https://raw.githubusercontent.com/jmwhitworth/lizardberg/refs/heads/main/update-info.json';

    // Fetch update information from your server
    $response = wp_remote_get( $update_url );
    if ( is_wp_error( $response ) ) {
        return $transient;
    }

    // Parse the JSON response (update_info.json must return the latest version details)
    $update_info = json_decode( wp_remote_retrieve_body( $response ) );

    // If a new version is available, modify the transient to reflect the update
    if ( version_compare( $transient->checked[ $plugin_slug ], $update_info->new_version, '<' ) ) {
        $plugin_data = array(
            'slug'        => 'lizardberg',
            'plugin'      => $plugin_slug,
            'new_version' => $update_info->new_version,
            'url'         => $update_info->url,
            'package'     => $update_info->package, // URL of the plugin zip file
        );
        $transient->response[ $plugin_slug ] = (object) $plugin_data;
    }

    return $transient;
}
add_filter( 'pre_set_site_transient_update_plugins', 'lizardberg_check_for_plugin_update' );