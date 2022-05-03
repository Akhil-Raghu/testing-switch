import { useContext, useState } from 'react';
import InvestCard from '../../components/InvestCard/InvestCard';
import MapImage from '../../components/MapImage/MapImage';
import Title from '../../components/Title/Title';
import { DarkModeContext } from '../../Context/DarkModeContext';
import investData from '../../data/investData';
import Streets from '../../images/streets.png';

import './Invest.scss';

const Invest = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [isOpen, setIsOpen] = useState(false);
	const [investCard, setInvestCard] = useState({});

	const showInvestImage = (item) => {
		const { id, name, image, title, bulletPoints, text, text2 } = item;
		setInvestCard({ id, name, image, title, bulletPoints, text, text2 });
		setIsOpen(!isOpen);
	};

	const onCloseInvest = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={darkMode ? 'invest invest__dark' : 'invest'}>
			<Title
				title="The Future of Real Estate Investing"
				paragraph="Investing in Cointinuum means investing in your community and your future. Explore this interactive map to learn more."
			/>
			{isOpen && (
				<InvestCard
					investInfo={investCard}
					onClick={onCloseInvest}
					setIsOpen={setIsOpen}
				/>
			)}
			<div className="map__container">
				<img className="map__streets" src={Streets} alt="streets" />
				{investData.map((item) => {
					return (
						<MapImage
							key={item.id}
							name={item.name}
							image={item.image}
							onClick={() => showInvestImage(item)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Invest;
