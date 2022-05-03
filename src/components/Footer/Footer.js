import { useEffect, useState } from 'react';
import Cointinuum from '../../images/newwlogo.png';
import { BsArrowRightShort } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import './Footer.scss';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [isEmailSent, setIsEmailSent] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
		const resetEmailInput = () => {
			if (isEmailSent) {
				setTimeout(() => {
					setIsEmailSent(false);
					setEmail('');
				}, 6000);
			}
		};
		resetEmailInput();
	}, [isEmailSent]);

	const sendEmail = (e) => {
		e.preventDefault();
		if (email) {
			setIsEmailSent(!isEmailSent);
			emailjs
				.sendForm(
					'service_n0mdid5',
					'template_zlpi6ci',
					e.target,
					'_FzTNzrFNAri7_v7i'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
		return;
	};

	return (
		<div className="footer">
			<div className="footer__lists--container">
				<div className="footer__lists">
					<h1 className="footer__title">RESOURCES</h1>
					<ul className="footer__list">
						<li className="footer__item">FAQs</li>
						<li className="footer__item">Whitepaper</li>
						<li className="footer__item">Diversity Initiative</li>
						<li className="footer__item">Roadmap</li>
						<li className="footer__item">Legal</li>
					</ul>
				</div>
				<div className="footer__lists">
					<h1 className="footer__title">CONNECT</h1>
					<ul className="footer__list">
						<li className="footer__item">Blog</li>
						<li className="footer__item">Twitter</li>
						<li className="footer__item">Reddit</li>
						<li className="footer__item">Contact Us</li>
						<li className="footer__item">Upcoming Events</li>
					</ul>
				</div>
				<div className="footer__lists">
					<h1 className="footer__title">GET INVOLVED</h1>
					<ul className="footer__list">
						<li className="footer__item">Invest Now</li>
						<li className="footer__item">Careers</li>
					</ul>
				</div>
				{!isEmailSent ? (
					<form className="footer__email" onSubmit={sendEmail}>
						<input
							name="email"
							className="footer__input"
							type="email"
							placeholder="Enter your email to recieve our monthly newsletter!"
							value={email}
							onChange={(e) => handleEmailChange(e)}
						/>
						<button className="footer__button">
							<BsArrowRightShort className="footer__arrow" />
						</button>
					</form>
				) : (
					<h1 className="footer__message--success">
						We have received your message.
					</h1>
				)}
			</div>
			<div className="footer__rights">
				<img className="footer__logo" src={Cointinuum} alt="cointinuum" />
				<p className="footer__copywrite">
					© 2022 Bit Real Estate Exchange | Privacy Policy
				</p>
			</div>
		</div>
	);
};

export default Footer;
