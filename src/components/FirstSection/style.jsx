import styled from "styled-components";

export const ContainerFirsSection = styled.div`
	width: 100%;
	max-height: 600px;
	display: flex;
`;

export const FirstNews = styled.div`
	width: 75%;
	border-right: 2px solid #fff;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const TimerForMatch = styled.div`
	position: relative;
	width: 25%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ContainerInfosBille = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	z-index: 10;
	a {
		display: block;
		text-decoration: none;
		text-align: center;
		color: #fff;
		background-color: #ff1541;
		padding: 10px;
		transition: all 0.4s ease;

		&:hover {
			background-color: #e1002a;
		}
	}
`;

export const MatchData = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const MatchDataTexts = styled.div`
	text-align: center;
	color: #fff;
	&:nth-child(1) {
		font-weight: 800;
	}
`;
