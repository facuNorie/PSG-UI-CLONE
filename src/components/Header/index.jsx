import React from "react";
import { HeaderNav, HeaderStyled, IconsDiv, IconsSocialMedia } from "./style";
import "./style.css";

export default function Header() {
	const items = [
		"EQUIPE PREMIÉRE",
		"MERCATO",
		"PSG TV",
		"PHOTOS",
		"FÉMENINES",
		"HANDBALL",
		"JUDO",
	];
	return (
		<HeaderStyled>
			<IconsDiv>
				<div className="divFaBars">
					<i className="fas fa-bars"></i>
				</div>

				<img
					src="https://images.daznservices.com/di/library/GOAL/d3/f4/escudo-del-psg_1318wjvuradyb18bakgo41c38x.png?t=1213426813&quality=100"
					alt="Psg logo "
				/>
				<IconsSocialMedia>
					<i className="fas fa-search"></i>
					<i className="far fa-user"></i>
					<i className="fas fa-globe"></i>
				</IconsSocialMedia>
			</IconsDiv>
			<HeaderNav>
				{items.map(item => (
					<a href="#" key={item}>
						{item}
					</a>
				))}
			</HeaderNav>
		</HeaderStyled>
	);
}
