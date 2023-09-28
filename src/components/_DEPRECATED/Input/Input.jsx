import React, { useRef } from 'react';
import * as Styled from './styled';
import FormErrorText from '../FormErrorText/FormErrorText';

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
						htmlFor={label}
						active={props.value ? 'true' : undefined}>
						{icon ? icon : ''}
						<Styled.Content>
							{label}
							{props.terms ? (
								<Styled.Terms href={props.terms.link} target="_blank">
									{` ${props.terms.content}`}
								</Styled.Terms>
							) : (
								''
							)}
						</Styled.Content>
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
