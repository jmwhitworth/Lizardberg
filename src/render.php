<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$id = $attributes['imageID'] ?? 0;
$url = $attributes['imageURL'] ?? '';
$minWidth = !empty($attributes['minWidth']) ? $attributes['minWidth'] : '90vh';
$maxWidth = !empty($attributes['maxWidth']) ? $attributes['maxWidth'] : '768px';
?>

<div <?php echo \get_block_wrapper_attributes(); ?>>
	<?php echo \wp_get_attachment_image(
		$id,
		attr: [
			'srcset' => \wp_get_attachment_image_srcset($id),
			'sizes' => "(max-width: 780px) {$minWidth}, {$maxWidth}",
			'loading' => 'lazy'
		]
	); ?>
</div>