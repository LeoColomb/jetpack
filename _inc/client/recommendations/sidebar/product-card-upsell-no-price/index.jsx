/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Gridicon from 'components/gridicon';
import { imagePath } from 'constants/urls';

/**
 * Style dependencies
 */
import './style.scss';

const ProductCardUpsellNoPrice = props => {
	const { upgradeUrl } = props;

	const features = [
		__( 'Robust security to keep your site safe' ),
		__( 'Speed-enhancing performance tools' ),
		__( 'Increase site growth with marketing' ),
	];

	return (
		<div className="jp-recommendations-product-card-upsell-no-price">
			<div className="jp-recommendations-product-card-upsell-no-price__header-chrome">
				<img src={ imagePath + '/star.svg' } alt="" />
				{ __( 'Recommended premium product' ) }
			</div>
			<div className="jp-recommendations-product-card-upsell-no-price__padding">
				<h2>{ __( 'Powerful security, performance, and marketing' ) }</h2>
				<ul>
					{ features.map( feature => (
						<li>
							<Gridicon icon="checkmark-circle" />
							{ feature }
						</li>
					) ) }
				</ul>
				<p>
					{ __(
						'Explore premium Jetpack product bundles or pick and choose exactly what you need.'
					) }
				</p>
				<Button primary href={ upgradeUrl }>
					{ __( 'Learn more' ) }
					<Gridicon icon="external" />
				</Button>
			</div>
		</div>
	);
};

export { ProductCardUpsellNoPrice };