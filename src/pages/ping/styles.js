import styled from 'styled-components';

export const Container = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 100vh;
	width: 100vw;
`
export const PingContainer = styled.p`
	color: ${({theme, error }) => !error ? theme.colors.text : 'red'};
	margin: 10px auto;
	font-size: 2rem;
`