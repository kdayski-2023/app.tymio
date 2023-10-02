import React, { useRef } from 'react';
import * as Styled from './styled';
import * as TymioUI from '../../';
import FormErrorText from '../FormErrorText/FormErrorText';
import { TYPOGRAPHY_SIZE } from '../../../models/types';

const Input = ({
	label,
	icon,
	error,
	onChange,
	innerRef,
	style,
	selector,
	...props
}) => {
	const textArea = useRef();

	const handleChange = (e) => {
		textArea.current.style.height = 'auto';
		textArea.current.style.height = textArea.current.scrollHeight + 'px';
		onChange && onChange(e);
	};

	return (
		<>
			{props.type === 'checkbox' ? (
				<Styled.CheckboxWrapper>
					<Styled.Checkbox id={label} {...props} onChange={onChange} />
					<Styled.Label
						htmlFor={label}>
						{icon ? icon : ''}
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
							{label}{' '}
							{props.terms ? (
								<Styled.Terms href={props.terms.link} target="_blank">
									{` ${props.terms.content}`}
								</Styled.Terms>
							) : (
								''
							)}
						</TymioUI.Typography>
					</Styled.Label>
					{error ? <FormErrorText error={error} /> : null}
				</Styled.CheckboxWrapper>
			) : (
				<>
					<Styled.InputWrapper style={style}>
						<Styled.Label>
							{selector ? selector : ''}
							{icon ? icon : ''}
							{label}
						</Styled.Label>
						{props.type === 'textarea' ? (
							<Styled.TextArea
								{...props}
								ref={textArea}
								onChange={handleChange}
							/>
						) : (
							<Styled.Input {...props} ref={innerRef} onChange={onChange} />
						)}
					</Styled.InputWrapper>
					{error ? <FormErrorText error={error} /> : null}
				</>
			)}
		</>
	);
};

export default Input;
