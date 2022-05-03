import './PossibilitiesCard.scss';

const PossibilitiesCard = ({ image, title, onClick, paragraph }) => {
	return (
		<div className="possibilities" onClick={onClick}>
			<div className="possibilities__image--container">
				<img className="possibilities__image" src={image} alt={image} />
			</div>
			<h1 className="possibilities__title">{title}</h1>
			<p className="paragraph__content">{paragraph}</p>
		</div>
	);
};

export default PossibilitiesCard;
