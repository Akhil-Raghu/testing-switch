import './BlogCard.scss';

const BlogCard = ({ title, paragraph, date, image, onClick }) => {
	return (
		<div className="blogCard" onClick={onClick}>
			<img className="blogCard__image" src={image} alt="blogImage" />
			<h3 className="blogCard__title">{title}</h3>
			<p className="blogCard__paragraph">{paragraph}</p>
			<p className="blogCard__date">{date}</p>
		</div>
	);
};

export default BlogCard;
