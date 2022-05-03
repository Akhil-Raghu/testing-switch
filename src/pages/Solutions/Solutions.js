import { useContext } from 'react';
import SmallCard from '../../components/SmallCard/SmallCard';
import Title from '../../components/Title/Title';
import VideoCard from '../../components/VideoCard/VideoCard';
import { DarkModeContext } from '../../Context/DarkModeContext';
import Stability from '../../images/transparent1.png';
import Liquidity from '../../images/transparent2.png';
import Community from '../../images/transparent3.png';
import Road from '../../images/transparent7.png';
import Car from '../../images/transparent8.png';
import Juice from '../../images/transparent9.png';
import './Solutions.scss';

const Solutions = () => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? 'solutions solutions__dark' : 'solutions'}>
			<Title
				title="Solutions Powered by Cointinuum BRX"
				paragraph="The ever-present pain points in real estate and crypto investments are 
				illiquidity and volatility, respectively.  But what if you could manage your 
				portfolio liquidity and stability risks, without inflation or sacrificing returns?"
				paragraph2="Our blockchain based real estate token and investment platform is a 
				decentralized peer-to-peer network which provides access to deals, capital 
				markets and digital real estate. Investors can instantly trade across asset 
				classes. Whether debt or equity, commercial or residential, you can pursue 
				your investment strategies and objectives. All the while, providing new 
				opportunities for economic development in communities across the US."
			/>
			{/* The SmallCard component className must be 'small__card' for info first and image after.  Or 'small__card small__reverse' for image first and info after. */}
			<SmallCard
				id="stability"
				className="small__card"
				title="Stability"
				paragraph="Cryptocurrency markets are known for
				their   volatility.   Cointinuum   stablecoin
				is anchored to real estate investment
				assets,  mitigating USD inflation while
				minimizing your portfolio's risk."
				image={Stability}
			/>
			<SmallCard
				id="liquidity"
				className="small__card small__reverse"
				title="Liquidity"
				paragraph="Traditional real estate is costly, time-
				intensive, and complicated. With no 
				term fees and no minimum 
				investment, our tokenized real estate 
				exchange provides instant and easy 
				access to capital markets, alternative 
				assets and institutional-grade real
				estate investments."
				image={Liquidity}
			/>
			<SmallCard
				id="community"
				className="small__card"
				title="Community"
				paragraph="Cointinuum democratizes access to real estate markets, enabling capital to 
				circulate locally, funding economic and property redevelopment for 
				communities who need it the most. Equity within redevelopment is a key 
				aspect of our mission. And we seek collaboration and partnerships with 
				community leaders, organizations, agencies and institutions in pursuit of this 
				vision."
				image={Community}
			/>
			<Title title="How Does it Work?" />
			<VideoCard />
			<SmallCard
				className="small__card"
				title="The Bit Real Estate Exchange"
				paragraph="The Bit Real Estate Exchange is a blockchain-based real estate tokenization 
				and trading platform that gives you the ability to buy, sell, and trade 
				fractional shares of real estate. Owner-operators and owner-occupants alike 
				may crowdfund real estate development projects and HELOC, trade debt and
				equity, and much more."
				image={Road}
			/>
			<SmallCard
				className="small__card small__reverse"
				title="BRX™ Tokens"
				paragraph="BRX Token is an investment vehicle for trading on the Bit Real Estate 
				Exchange platform. BRX Tokens are smart contracts that denote fractional 
				ownership of real estate on the Ethereum network. Our diverse token 
				offerings allow you to customize your crypto real estate investment vehicle, 
				optimizing your portfolio to better reach your chosen destination."
				image={Car}
			/>
			<SmallCard
				className="small__card"
				title="Cointinuum (CTM™) Cryptocurrency"
				paragraph="Cointinuum is a real estate-backed stablecoin that provides liquidity and dividends, giving you easy access to real estate investments while resisting the volatility of crypto markets and the inflation of USD. CTM appreciates based on a portfolio of real estate investments and an index of US real estate markets. CTM acquires, develops, and manages income-producing commercial and residential properties. This ERC-20 Token is native to and traded on the BRX Exchange."
				image={Juice}
			/>
		</div>
	);
};

export default Solutions;
