import { useContext, useState } from 'react';
import LargeCard from '../../components/LargeCard/LargeCard';
import TeamCard from '../../components/TeamCard/TeamCard';
import Title from '../../components/Title/Title';
import Biography from '../../components/Biography/Biography';
import teamData from '../../data/teamData';
import './About.scss';
import { DarkModeContext } from '../../Context/DarkModeContext';

const About = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [biography, setBiography] = useState(false);
	const [teamBio, setTeamBio] = useState({});

	const showBio = (
		id,
		name,
		position,
		image,
		linkedIn,
		personalWeb,
		description,
		quote
	) => {
		setTeamBio({
			id,
			name,
			position,
			image,
			linkedIn,
			personalWeb,
			description,
			quote,
		});
		setBiography(!biography);
	};

	const onCloseBio = () => {
		setBiography(!biography);
	};

	return (
		<div className={darkMode ? 'about about__dark' : 'about'}>
			<LargeCard
				className="about__founder"
				image=""
				title="Meet the founder"
				paragraph=""
			/>
			<Title
				title="Our Mission"
				paragraph="At Cointinuum, we believe that access to markets can be empowering to individuals, businesses, and communities alike. We are on a mission to democratize real estate investments for all while supporting economic development throughout diverse communities across the US."
			/>
			<LargeCard
				className="large__card large__reverse"
				image=""
				title="Economic Equity"
				paragraph1="We recognize that there are structural inequities which disproportionately affect the educational, career, and commercial opportunities within communities of color, and that these disparities tend to form a cycle of poverty and despair for those community members."
				paragraph2="Cointinuum addresses this disparity through an innovative social impact strategy which provides community redevelopment programming, technical education and jobs programs, and a commercial investment strategy that helps circulate local dollars throughout the community in greater amounts. This innovative and intentional approach will bring capital back into the community, empower its members and spread social and financial equity throughout underserved communities across the country, who need it the most."
				paragraph3="Our strategy creates a “multiplier effect”, promoting economic redevelopment, supporting Black and Brown small businesses, increasing school district funding through increasing the real estate tax base, amplifying diversity in the tech sector, and boundless other opportunities yet to be discovered."
			/>
			<LargeCard
				className="large__card large__reverse"
				image=""
				title="Environmental Sustainability"
				paragraph1="Data centers are vital for our society to connect, conduct business, and store information. The rise of Bitcoin mining and other proof-of-work cryptocurrencies further accelerates the demand for data centers, but this comes at a heavy environmental cost. Traditional data centers are energy-intensive, causing significant greenhouse gas emissions. Cointinuum seeks to provide an environmentally responsible solution. We’re working to acquire and reposition property suitable for development or redevelopment into data centers, which will operate sustainably and efficiently through clean energy sourced from wind and hydroelectric power. Though Web3 is undeniably innovative and revolutionary, it is still tethered to the physical world that is fueling it. Ultimately, the source of this technology’s energy will determine its environmental impact. Cointinuum strives to be stewards of a more carbon-neutral blockchain system."
			/>
			<Title title="Meet the Team" />
			{biography && (
				<Biography
					teamBio={teamBio}
					onClick={onCloseBio}
					setBiography={setBiography}
				/>
			)}
			<div className="about__team--cards">
				{teamData.map(
					({
						id,
						name,
						position,
						image,
						linkedIn,
						personalWeb,
						description,
						quote,
					}) => {
						return (
							<TeamCard
								key={id}
								name={name}
								position={position}
								image={image}
								onClick={() =>
									showBio(
										id,
										name,
										position,
										image,
										linkedIn,
										personalWeb,
										description,
										quote
									)
								}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default About;
