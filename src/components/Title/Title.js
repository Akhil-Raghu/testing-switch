import './Title.scss';

const Title = ({ title, paragraph, paragraph2 }) => {
	return (
		<div className="title__component">
			<h1 className="title__component--title">{title}</h1>
			<p className="title__component--paragraph">{paragraph}</p>
			<p className="title__component--paragraph2">{paragraph2}</p>
		</div>
	);
};

export default Title;
