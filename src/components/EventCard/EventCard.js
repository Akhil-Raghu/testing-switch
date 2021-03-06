import React from 'react';
import './EventCard.scss';

const EventCard = ({ title, subTitle, time, day, month, image }) => {
	return (
		<div className="eventCard">
			<div className="eventCard__info">
				<div className="eventCard__title--container">
					<h1 className="eventCard__title">{title}</h1>
					<h1 className="eventCard__subTitle">{subTitle}</h1>
					<p className="eventCard__time">{time}</p>
				</div>
				<div className="eventCard__date">
					<h1 className="eventCard__day">{day}</h1>
					<h3 className="eventCard__month">{month}</h3>
				</div>
			</div>
			<img className="eventCard__image" src={image} alt="event" />
		</div>
	);
};

export default EventCard;
