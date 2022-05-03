import './VideoCard.scss';

const VideoCard = ({ title }) => {
	return (
		<div className="video__card">
			<h1 className="video__title">{title}</h1>
		</div>
	);
};

export default VideoCard;
