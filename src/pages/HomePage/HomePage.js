import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import PossibilitiesCard from '../../components/PossibilitiesCard/PossibilitiesCard';
import Title from '../../components/Title/Title';
import VideoCard from '../../components/VideoCard/VideoCard';
import Stability from '../../images/Stability.png';
import Liquidity from '../../images/Liquidity.png';
import Community from '../../images/Community.png';
import NewsLetterPop from '../../components/NewsLetterPop/NewsLetterPop';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './HomePage.scss';

const HomePage = () => {
	const navigate = useNavigate();
	const { darkMode } = useContext(DarkModeContext);

	const [newsLetter, setNewsLetter] = useState(false);
	const [counter, setCounter] = useState(0);

	const count = () => {
		if (newsLetter) {
			setCounter(localStorage.setItem('counter', counter + 1));
		}
	};

	const localStorageCounter = localStorage.getItem('counter');

	useEffect(() => {
		const getNewsLetter = () => {
			if (!localStorageCounter) {
				setTimeout(() => {
					setNewsLetter(!newsLetter);
				}, 60000);
			}
		};
		getNewsLetter();
	}, [newsLetter, localStorageCounter]);

	const windowWidth = window.innerWidth;

	const handleLearnClick = () => {
		navigate('/solutions');
		window.scrollTo(0, 0);
	};

	const handleInvestClick = () => {
		navigate('/invest');
		window.scrollTo(0, 0);
	};

	const onLiquidityClick = () => {
		navigate('/solutions');
		if (windowWidth > 500) {
			window.scrollTo(0, 750);
		} else {
			window.scrollTo(0, 950);
		}
	};

	const onCommunityClick = () => {
		navigate('/solutions');
		if (windowWidth > 500) {
			window.scrollTo(0, 1150);
		} else {
			window.scrollTo(0, 1550);
		}
	};

	const onStabilityClick = () => {
		navigate('/solutions');
		if (windowWidth > 500) {
			window.scrollTo(0, 350);
		} else {
			window.scrollTo(0, 450);
		}
	};

	const isNewsLetter = () => {
		setNewsLetter(!newsLetter);
		count();
	};

	return (
		<>
			{newsLetter && <NewsLetterPop onClick={isNewsLetter} />}
			<div className={darkMode ? 'homepage homepage__dark' : 'homepage'}>
				<VideoCard />
				<Title
					title="Boundless Digital Real Estate"
					paragraph="Democratizing real estate investments while empowering community equity and development through Cointinuum, a new real estate-backed stablecoin that provides liquidity and stability for real estate and cryptocurrency portfolios."
				/>
				<div className="homepage__buttons">
					<Button
						className="btn__secondary"
						content="Get Started"
						onClick={handleLearnClick}
					/>
				</div>
				<div className="homepage__possibilities">
					<h1 className="homepage__possibilities--title">
						Boundless Possibilities
					</h1>
					<p className="homepage__possibilities--paragraph">
						Cointinuum and the Bit Real Estate Exchange (BRX) solve some of the
						most elusive challenges in real estate, cryptocurrency, and
						community redevelopment. The possibilities with Cointinuum BRX are
						boundless.
					</p>
					<div className="possibilities__card--container">
						<PossibilitiesCard
							image={Stability}
							title="Stability"
							onClick={onStabilityClick}
							paragraph="A stablecoin that resist inflation, with profit potential and positive social impact"
						/>
						<PossibilitiesCard
							image={Liquidity}
							title="Liquidity"
							onClick={onLiquidityClick}
							paragraph="Fast and easy institutional grade investments with no minimums or term requirements"
						/>
						<PossibilitiesCard
							image={Community}
							title="Community"
							onClick={onCommunityClick}
							paragraph="Access new economic and redevelopment opportunities through crypto"
						/>
					</div>
				</div>
				<Button
					className="btn__primary"
					content="Learn More"
					onClick={handleInvestClick}
				/>
			</div>
		</>
	);
};

export default HomePage;
