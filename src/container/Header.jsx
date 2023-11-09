import {Link} from 'react-router-dom';
import help from '../assets/noun-help-1459308.svg';
import notify from '../assets/noun-notification-1040085 (1) 1.svg';
import setting from '../assets/noun-setting-1835295 1.svg';
import search from '../assets/Search.svg';
import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<header className="bg-gray-100  ">
			<div className="max-w-7xl h-20 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center pt-2 md:justify-start md:space-x-10">
					<div className="flex flex-0.5 justify-start lg:w-0 lg:flex-1">
						<a href="#">
							{/* Assume your logo is text-based */}
							<span className="text-xl font-semibold text-gray-700">
								<img src={logo} alt="" />
							</span>
						</a>
					</div>
					<div className="flex-1 justify-center hidden md:flex">
						<div className="w-full">
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<img src={search} alt="" />
								</div>
								<input
									id="search"
									name="search"
									className="block w-full pl-10 pr-4 py-4  rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="Tap to Search"
									type="search"
								/>
							</div>
						</div>
					</div>
					<div className="flex-1 flex items-center justify-end lg:w-0">
						<Link href="#" className="text-gray-600 hover:text-gray-900">
							{/* <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" /> */}
							<img src={notify} alt="help" />
						</Link>
						<Link href="#" className="ml-6 text-gray-600 hover:text-gray-900">
							{/* <UserIcon className="h-6 w-6" aria-hidden="true" /> */}
							<img src={setting} alt="help" />
						</Link>
						<Link href="#" className="ml-6 text-gray-600 hover:text-gray-900">
							{/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
							<img src={help} alt="help" />
						</Link>
						<Link href="#" className=" ml-6 text-gray-600 hover:text-gray-900">
							{/* Your Profile/Sign In Icon */}
							<div className=" h-8 w-8 flex justify-center items-center bg-red-400  rounded-full">
								<span className="p-2 ">A</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
