/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, InspectorControls, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalUnitControl as UnitControl,
    __experimentalSpacer as Spacer,
    __experimentalGrid as Grid,
	__experimentalText as Text
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({
			imageID: media.id,
			imageURL: media.url
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			imageID: 0,
			imageURL: ''
		});
	};

	const updateMinWidth = (value) => {
		setAttributes({ minWidth: value });
	};

	const updateMaxWidth = (value) => {
		setAttributes({ maxWidth: value });
	};

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __('Lizardberg Image Settings', 'lizardberg-image') }>
					<Spacer>
						<Text>
							{ __('Lizardberg Image will ensure your image scales to a more appropriate size based on the viewport.', 'lizardberg-image') }
						</Text>
					</Spacer>
					<Spacer>
						<Grid columns={ 2 }>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes={ ['image'] }
									value={ attributes.imageID }
									render={({ open }) => (
										<Button onClick={ open } variant='primary'>
											{ attributes.imageID ? __('Change Image', 'lizardberg-image') : __('Select Image', 'lizardberg-image') }
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.imageID > 0 && (
								<Button onClick={ onRemoveImage } variant='secondary'>
									{ __('Remove Image', 'lizardberg-image') }
								</Button>
							)}
						</Grid>
					</Spacer>
					<Spacer>
						<UnitControl
							onChange={ updateMinWidth }
							value={ attributes.minWidth }
							units={[
								{ value: 'px', label: 'px', default: 768 },
								{ value: 'vw', label: 'vw', default: 90 }
							]}
							label={ __('Minimum width for tablet and smaller', 'lizardberg-image') }
						/>
					</Spacer>
					<Spacer>
						<UnitControl
							onChange={ updateMaxWidth }
							value={ attributes.maxWidth }
							units={[
								{ value: 'px', label: 'px', default: 768 },
								{ value: 'vw', label: 'vw', default: 100 }
							]}
							label={ __('Maximum width on desktop', 'lizardberg-image') }
							isPressEnterToChange={ true }
						/>
					</Spacer>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender 
				block="lizardberg/lizardberg-image"
				attributes={ props.attributes}  
			/>
		</div>
	);
}
