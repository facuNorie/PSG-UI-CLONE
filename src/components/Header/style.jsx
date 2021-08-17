import styled from "styled-components";

export const HeaderStyled = styled.div`
	background-color: white;
	color: #1a2434;
	height: 154px;
`;

export const IconsDiv = styled.div`
	padding: 0 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	img {
		height: 100px;
	}
	svg {
		font-size: 1.2rem;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const IconsSocialMedia = styled.div`
	svg {
		padding: 0 15px;

		&:hover {
			color: #ff1541;
		}
	}
`;

export const HeaderNav = styled.div`
	display: flex;
	justify-content: center;
	a {
		font-weight: 800;
		padding-bottom: 5px;
		margin: 10px 18px 0;
		text-decoration: none;
		color: #1a2434;
		border-bottom: 2px solid #ffffff;
		transition: all ease-out 400ms;
		&:hover {
			border-bottom: 2px solid #c8cacd;
		}
	}
`;
