import {sideBarData} from '../assets/data/sidebarData';
import logout from '../assets/noun-log-out-5762374 1.svg';
const Nav = () => {
	return (
		<>
			<div
				className=" flex flex-col justify-around border items-center bg-white
            "
			>
				<div className="flex flex-col items-center gap-1 pt-8  ml-8">
					{sideBarData?.map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-3 py-3 h-14 w-[270px] hover:bg-[#1B9BEF] hover:text-white rounded-xl pl-7 "
						>
							<img src={item.icon} className="" alt="" />
							<span>{item.heading}</span>
						</div>
					))}
				</div>

				<div className="w-1/2 m-auto  ">
					<button className="flex gap-3 items-center">
						<img src={logout} alt="logout" />
						<span>Logout</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Nav;
