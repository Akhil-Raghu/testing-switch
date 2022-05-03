import { useContext, useState } from 'react';
import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.png';
import Reddit from '../../images/Reddit.png';
import Youtube from '../../images/Youtube.png';
import LinkedIn from '../../images/LinkedIn.png';
import Rarible from '../../images/rarible.png';
import BlogCard from '../../components/BlogCard/BlogCard';
import Button from '../../components/Button/Button';
import eventsData from '../../data/eventsData';
import blogData from '../../data/blogData';
import useForm from '../../hooks/useForm';
import emailjs from 'emailjs-com';

import './Connect.scss';
import { DarkModeContext } from '../../Context/DarkModeContext';

const Connect = () => {
	const { darkMode } = useContext(DarkModeContext);

	const initialValue = {
		email: '',
		name: '',
		subject: '',
		description: '',
		message: '',
	};

	const [values, handleInputChange, setValues] = useForm(initialValue);

	const { email, name, subject, description, message } = values;

	const [isEmailSent, setIsEmailSent] = useState(false);

	const onTwitterClick = () => {
		window.open('https://twitter.com/CointinuumBRX', '_blank');
	};

	const onInstagramClick = () => {
		window.open('https://www.instagram.com/cointinuum/', '_blank');
	};

	const onRedditClick = () => {
		window.open('https://www.reddit.com/r/cointinuum/', '_blank');
	};

	const onYoutubeClick = () => {
		window.open('https://www.youtube.com/c/COINtinuum', '_blank');
	};

	const onLinkedInClick = () => {
		window.open(
			'https://www.linkedin.com/company/bit-real-estate-exchange',
			'_blank'
		);
	};

	const onRaribleClick = () => {
		window.open('https://rarible.com/cointinuum/sale', '_blank');
	};

	const onBlogClick = (url) => {
		window.open(url, '_blank');
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setIsEmailSent(!isEmailSent);
		emailjs
			.sendForm(
				'service_xdyk09o',
				'template_xz0vtmp',
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
		setValues(initialValue);
	};

	return (
		<div className={darkMode ? 'connect connect__dark' : 'connect'}>
			<Title
				title="Join the Cointinuum Community"
				paragraph="Cointinuum Connect is a vibrant hub for real estate professionals, community investors, crypto holders, and believers alike! Looking to learn more about CTM and BRX? Connect with our community today."
			/>
			<div className="connect__image--container">
				<img
					className="connect__image"
					src={Twitter}
					alt="twitter"
					onClick={onTwitterClick}
				/>
				<img
					className="connect__image"
					src={Instagram}
					alt="instagram"
					onClick={onInstagramClick}
				/>
				<img
					className="connect__image"
					src={Reddit}
					alt="reddit"
					onClick={onRedditClick}
				/>
				<img
					className="connect__image"
					src={Youtube}
					alt="youtube"
					onClick={onYoutubeClick}
				/>
				<img
					className="connect__image"
					src={LinkedIn}
					alt="linkedIn"
					onClick={onLinkedInClick}
				/>
				<img
					className="connect__image"
					src={Rarible}
					alt="rarible"
					onClick={onRaribleClick}
				/>
			</div>
			<h1 className="connect__title">The Latest from Our Blog</h1>
			<div className="connect__blog">
				{blogData.map(({ id, title, paragraph, date, image, url }) => {
					return (
						<BlogCard
							key={id}
							title={title}
							paragraph={paragraph}
							date={date}
							image={image}
							onClick={() => onBlogClick(url)}
						/>
					);
				})}
			</div>
			<h1 className="connect__title">Upcoming Events</h1>
			<div className="connect__events">
				{eventsData.map(({ id, title, subTitle, time, day, month, image }) => {
					return (
						<EventCard
							key={id}
							title={title}
							subTitle={subTitle}
							day={day}
							month={month}
							time={time}
							image={image}
						/>
					);
				})}
			</div>
			<Title title="Send Us a Message" />
			{!isEmailSent ? (
				<form className="connect__form" onSubmit={sendEmail}>
					<input
						name="email"
						className="connect__input"
						type="email"
						placeholder="Email"
						value={email}
						onChange={handleInputChange}
					/>
					<div className="connect__name">
						<input
							name="name"
							className="connect__input input__name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={handleInputChange}
						/>
						<input
							name="subject"
							className="connect__input input__name"
							type="text"
							placeholder="Subject"
							value={subject}
							onChange={handleInputChange}
						/>
					</div>
					<input
						name="description"
						className="connect__input"
						type="text"
						placeholder="Who you are? (eg. enthusiast, real estate agent, nonprofit organization, etc.)"
						value={description}
						onChange={handleInputChange}
					/>
					<textarea
						name="message"
						className="connect__input"
						cols="30"
						rows="10"
						placeholder="Message"
						value={message}
						onChange={handleInputChange}
					></textarea>
					<p>
						If you would like to recive periodic communications from Cointinuum
						about upcoming events, product launches, airdrops, and more, please
						check the box below:
					</p>
					<p>
						<input type="checkbox" className="connect__checkbox"></input>
						<label form="connect__checkbox">
							I agree to recieve newsletters from Cointinuum and the Bit Real
							Estate Exchange.
						</label>
					</p>
					<Button className="btn__secondary" content="Send" type="submit" />
				</form>
			) : (
				<h1 className="connect__message--success">
					We have received your message.
				</h1>
			)}
		</div>
	);
};

export default Connect;
