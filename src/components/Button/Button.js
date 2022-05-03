import './Button.scss';

const Button = ({ className, content, onClick, type, onSubmit }) => {
	return (
		<button
			className={className}
			type={type}
			onClick={onClick}
			onSubmit={onSubmit}
		>
			{content}
		</button>
	);
};

export default Button;
