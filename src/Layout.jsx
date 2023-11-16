import {Outlet} from 'react-router-dom';
import Header from './container/Header';
import Nav from './container/Nav';

const Layout = () => {
	return (
		<div className=" h-screen  bg-gray-100">
			<div className="h-[100%] grid grid-cols-[20rem_auto]">
				<Nav></Nav>
				<div className="flex flex-col">
					<Header />
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
