import React from 'react';
import * as Styled from './styled';
import * as UI from '../../components';

const UIDemo = () => {
	const faqList = [
		{
			q: 'All questions',
			a: 'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
		},
		{
			q: 'All questions',
			a: 'All questionsAll questionsAll questions',
		},
		{
			q: 'All questions',
			a: 'All questionsAll questionsAll questions',
		},
	];
	return (
		<Styled.Container>
			<UI.H1>H1</UI.H1>
			<UI.HH>HH</UI.HH>
			<UI.H2>H2</UI.H2>
			<UI.Typography size={'Big'}>Paragraph</UI.Typography>
			<UI.Typography size={'Medium'}>Paragraph</UI.Typography>
			<UI.Typography size={'Small'}>Paragraph</UI.Typography>
			<UI.Button lowercase={true}>Start earning</UI.Button>
			<UI.Menu />
			<UI.Menu light={true} />
			<UI.Accordion faqList={faqList} />
		</Styled.Container>
	);
};

export default UIDemo;
