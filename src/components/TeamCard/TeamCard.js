import './TeamCard.scss';

const TeamCard = ({ image, name, position, onClick }) => {
	return (
		<div className="teamCard" onClick={onClick}>
			<img className="teamCard__image" src={image} alt="team member" />
			<div className="teamCard__info">
				<h1 className="teamCard__name">{name}</h1>
				<h2 className="teamCard__position">{position}</h2>
			</div>
		</div>
	);
};

export default TeamCard;
