import React from "react";
import { ItemNav, NavbarStyled } from "./style";

export default function Navbar() {
	const itemsNav = [
		"PSG.FR",
		"BILLETERIE",
		"BOUTIQUE",
		"MYPARIS",
		"STADIUM TOUR",
		"ENTERPRISES",
	];
	return (
		<>
			<NavbarStyled>
				{itemsNav.map(item => (
					<ItemNav href="#" key={item}>
						{item}
					</ItemNav>
				))}
			</NavbarStyled>
		</>
	);
}
