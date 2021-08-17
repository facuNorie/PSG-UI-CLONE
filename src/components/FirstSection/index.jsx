import React from "react";
import {
	ContainerFirsSection,
	FirstNews,
	TimerForMatch,
	ContainerInfosBille,
	MatchData,
	MatchDataTexts,
} from "./style";

export default function FirstSection() {
	return (
		<ContainerFirsSection>
			<FirstNews>
				<img
					src="https://images.psg.media/media/209161/15.jpg?anchor=center&mode=crop&width=800&height=533&quality=60"
					alt="Messi training with psg"
				/>
			</FirstNews>
			<TimerForMatch>
				<img
					src="https://images.psg.media/media/188250/matchbox-first-team-20-21-02.jpg"
					alt="background clocks"
				/>
				<ContainerInfosBille>
					<a href="#">INFOS BILLETTERIE</a>
				</ContainerInfosBille>
				<MatchData>
					<MatchDataTexts>
						<p>EQUIPE PREMIÉRE</p>
						<p>LIGUE 1</p>
					</MatchDataTexts>
					<div>EQUIPES</div>
					<div>TIMER</div>
				</MatchData>
			</TimerForMatch>
		</ContainerFirsSection>
	);
}
