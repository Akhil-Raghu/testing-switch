import './SmallCard.scss';

const SolutionCard = ({ className, title, paragraph, image, id }) => {
	return (
		<div className={className} id={id}>
			<div className="small__info">
				<h2 className="small__info--title">{title}</h2>
				<p className="small__info--paragraph">{paragraph}</p>
			</div>
			<div className="small__image--container">
				<img className="small__image" src={image} alt={title} />
			</div>
		</div>
	);
};

export default SolutionCard;
