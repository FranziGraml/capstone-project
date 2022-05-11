import styled from 'styled-components';
import data from '../Services/static-posts.json';

export default function Posts() {
	return (
		<CardGrid>
			<CardItem>
				<h3>{data[0].name}</h3>
				<p>{data[0].content}</p>
				<h5>{data[0].contact}</h5>
				<p>{data[0].mail}</p>
				<p>{data[0].mobile}</p>
			</CardItem>
		</CardGrid>
	);
}
export const CardGrid = styled.div`
flex-direction: row;
flex-wrap;
gap: 15px;
padding: 10px;
`;

export const CardItem = styled.div`
	list-style: none;
	padding: 10px;
	border-radius: 5px;
	border-style: solid;
`;
