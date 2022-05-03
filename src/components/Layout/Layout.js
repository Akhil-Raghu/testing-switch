import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
