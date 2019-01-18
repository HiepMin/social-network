import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert } from 'reactstrap';

const RenderAlert = styled(Alert)`
	font-size: 13px;
	margin-top: 15px;
	margin-bottom: ${props => props.mb ? props.mb : 0} !important;
	padding: 8px !important;
	display: ${props => props.block ? 'block' : 'inline-block'};
`;
RenderAlert.propTypes = {
	color: PropTypes.string.isRequired,
	error: PropTypes.string,
	style: PropTypes.object,
	block: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
	]),
	mb: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}
export default ({error, color, mb, block, style}) => 
		<RenderAlert  color={color} mb={mb} block={block} style={style}>{error}</RenderAlert>
