import './MapImage.scss';

const MapImage = ({ name, image, onClick }) => {
	return (
		<img
			className={`map__image map__${name}`}
			src={image}
			alt={name}
			onClick={onClick}
		/>
	);
};

export default MapImage;
