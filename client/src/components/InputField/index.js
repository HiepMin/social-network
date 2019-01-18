import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'styled-components/macro';
import cn from 'classnames';
import RenderAlert from './../Alert';
const Label = styled.label`
	font-size: 14px;
	text-transform: capitalize;
	color: #0000009e;
	font-weight: bold;
`;
const FormGroup = styled.div`
	margin: 0 auto 1.7rem;
	width: ${props => props.width ? props.width : "100%"};
	position: relative;
`;
const Input = styled.input`
	width: 100%;
	background: #fff;
	box-shadow: 0 0 1px 2px #0000002e;
	border-radius: 999px;
	padding: 6px 16px;
	outline: none;
	border: none;
	font-size: 13px;
	&::placeholder{
		font-size: 13px;
		text-transform: capitalize;
	}
`;
const InputField = props => {
	const {
		// input,
		type,
		name,
		placeholder,
		label,
		id,
		processing,
		formGroupWidth,
		style,
		info,
		onChange,
		// meta: { error, touched },
	} = props;
	return (
	<FormGroup 
		width={formGroupWidth} 
		style={style}
		className={cn({ 'mb-3': info })}>
    <Label htmlFor={id}>{label}</Label>
		{
			props.input ? (
				<Input 
					{...props.input} 
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
				/>
			) : (
				<Input 
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
				/>
			)
		}
		{ processing  && 
			<i 
			css={`
				position: absolute;
				top: 25%;
				right: 10px;
				`} 
				className="fas fa-spinner fa-spin"/> 
		}
		{ info && <small className="text-muted mt-2 ml-3 d-inline-block">{info}</small> }
		{
			props.input ? 
			(
				props.meta.touched && props.meta.error && <RenderAlert color="danger" error={props.meta.error} /> 
			) : null
		}
  </FormGroup>
)}
InputField.defaultProps = {
	type: "text"
}
InputField.propTypes = {
	processing: PropTypes.bool,
	type: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	info: PropTypes.string
}
export default InputField;
