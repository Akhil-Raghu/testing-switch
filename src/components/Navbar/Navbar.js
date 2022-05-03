import Cointinuum from '../../images/newblogo.png';
import CointinuumWhite from '../../images/newwlogo.png';
import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { RiMoonLine } from 'react-icons/ri';
import { MdOutlineLightMode } from 'react-icons/md';
import './Navbar.scss';

const Navbar = () => {
	const navigate = useNavigate();

	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	const [isMobile, setIsMobile] = useState(false);

	const onLogoClick = () => {
		navigate('/');
	};
	return (
		<nav className="navbar">
			<img
				className="navbar__image"
				src={darkMode ? CointinuumWhite : Cointinuum}
				alt="cointinuum logo"
				onClick={onLogoClick}
			/>
			<ul
				className={isMobile ? 'navbar__list--mobile' : 'navbar__list'}
				onClick={() => setIsMobile(false)}
			>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/solutions"
					>
						Solutions
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/invest"
					>
						Invest
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="connect"
					>
						Connect
					</NavLink>
				</li>
				{darkMode ? (
					<MdOutlineLightMode
						className={
							darkMode ? 'navbar__link navbar__link--dark' : 'navbar__link'
						}
						onClick={toggleDarkMode}
					/>
				) : (
					<RiMoonLine
						className={
							darkMode ? 'navbar__link navbar__link--dark' : 'navbar__link'
						}
						onClick={toggleDarkMode}
					/>
				)}
			</ul>
			<button
				className="navbar__mobile--icon"
				onClick={() => setIsMobile(!isMobile)}
			>
				{isMobile ? <GrFormClose /> : <HiMenu />}
			</button>
		</nav>
	);
};

export default Navbar;
