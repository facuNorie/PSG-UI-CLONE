import styled from "styled-components";

export const NavbarStyled = styled.div`
	background-color: #1a2434;
	height: 34px;
	padding-left: 13px;
	overflow: hidden;
`;

export const ItemNav = styled.a`
	border-top: 3px solid #1a2434;
	color: #fff;
	text-decoration: none;
	display: inline-block;
	font-weight: 700;
	font-size: 0.7rem;
	line-height: 3;
	font-family: Arial, Helvetica, sans-serif;
	transition: all ease-out 600ms;
	padding: 0 16px;
	letter-spacing: -0.5px;
	&:hover {
		background: #49505c;
	}
	&:first-child {
		border-top: 3px solid #ff1541;
		background-color: #49505c;
	}
`;
