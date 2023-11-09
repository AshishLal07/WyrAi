import {Outlet} from 'react-router-dom';
import Header from './container/Header';
import Nav from './container/Nav';

const Layout = () => {
	return (
		<div className=" h-screen  bg-gray-100">
			<Header />
			<div className="h-[90%] grid grid-cols-[20rem_auto]">
				<Nav></Nav>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
