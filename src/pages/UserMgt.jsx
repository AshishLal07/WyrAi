import work from '../assets/noun-work-5949579.svg';
import select from '../assets/noun-select-all-4671270 1.svg';
import plus from '../assets/typcn_plus.svg';
import gps from '../assets/ion_location-outline.svg';
import UserCard from '../container/UserCard'; //change the name of the file later
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PopupBranch from '../container/PopupBranch';
import {userGloabalContext} from '../UserContext';
import Menu from '../container/Menu';
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {FaRegTrashAlt} from 'react-icons/fa';

// *** there is filter to be added on when click button there is remove of id from array State ***

// import {useEffect, useState} from 'react';

// change the checkbox styles

const UserMgt = () => {
	const {
		branchData,
		branchInfo,
		handleBranchChange,
		handelBranchSubmit,
		userData,
		fetchData,
		edit,
		checkedItems,
		setCheckedItems,
	} = userGloabalContext();

	console.log(branchData[0]);

	const [popUp, setPopup] = useState(false);

	const handleDelete = async () => {
		console.log(checkedItems);
		const resp = await fetch('http://localhost:3000/deleteEmployee', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({userIds: checkedItems}),
		});

		fetchData();
	};

	const handleEscKeyPress = (event) => {
		if (event.key === 'Escape') {
			// Do something when the Esc key is pressed
			setPopup(false);
		}
	};
	console.log(checkedItems.length);
	const handleClickOutside = () => {
		// console.log
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEscKeyPress);

		window.addEventListener('click', handleClickOutside);

		// Cleanup: remove event listener when the component unmounts
		return () => {
			document.removeEventListener('keydown', handleEscKeyPress);
			window.removeEventListener('click', handleClickOutside);
		};
	}, []); // The empty dependency array ensures that the effect runs only once when the component mounts

	// console.log(branchData.length, branchData[0].location);

	// const handleBranchChange = (e) => {
	// 	setBranchInfo({...branchInfo, [e.target.name]: e.target.value});
	// 	console.log(branchInfo);
	// };

	return (
		<>
			<div className="flex flex-col w-11/12 h-full overflow-hidden">
				<header className=" w-full items-center h-[60px] flex gap-5 justify-end mb-5 ">
					<div className="flex gap-5   items-center">
						{checkedItems.length === 1 && (
							<button
								className=""
								id="edit"
								// className="bg-white py-[6px] pr-5 pl-4 items-center w-24 flex gap-1 text-xs text-blue font-bold rounded-md border border-blue"
								onClick={() => edit(checkedItems)}
							>
								<MdOutlineModeEditOutline className="w-9 h-9" />
							</button>
						)}
						{checkedItems.length >= 1 && (
							<button
								// className="bg-[#EE7360] py-[6px] pr-5 pl-4 items-center w-24 flex gap-1 text-xs text-white font-bold rounded-md"
								onClick={() => handleDelete()}
								id="delete"
							>
								<FaRegTrashAlt className="text-3xl text-orange" />
							</button>
						)}
					</div>
					<div className="">
						<Link
							to={'/add'}
							className="bg-[#1B9BEF] text-white font-bold px-11 py-3 rounded-md "
						>
							Add New User
						</Link>
					</div>
				</header>
				<div className="grid grid-cols-[13rem_auto] gap-6 h-full">
					<div>
						<div className="flex flex-col  bg-white h-full ">
							<div className="flex items-center gap-1 pl-6 h-[52px] ">
								<img src={work} alt="branch" />
								<span>Branch</span>
							</div>
							<div className="flex hover:bg-[#1B9BEF14] pl-6 gap-1 py-3">
								<img src={select} alt="branch" />
								<span>View All Users</span>
							</div>
							<div className="flex flex-col gap-1 text-gray-500">
								{branchData.length > 0 &&
									branchData.map((item, index) => (
										<div
											key={index}
											className="flex items-center justify-between pl-5 py-3 h-14 hover:bg-[#1B9BEF14] "
										>
											<div className="flex gap-3">
												<img src={gps} className="" alt="gps" />
												<div className="flex flex-col ">
													<span className="text-[14px] font-medium">
														{' '}
														{item.branchName}
													</span>
													<span className="text-xs">{item.location}</span>
												</div>
											</div>

											<Menu />
										</div>
									))}
							</div>
							<div
								className="flex cursor-pointer pl-6 gap-1 py-3"
								onClick={() => setPopup(!popUp)}
							>
								<img src={plus} alt="add" />
								<span className="text-[#1B9BEF] font-bold">Add branch</span>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap w-full h-24 gap-4">
						{userData.map((item, index) => (
							<UserCard
								check={checkedItems}
								setCheck={setCheckedItems}
								key={index}
								item={item}
							/>
						))}
					</div>
				</div>
				<div></div>
				{popUp && (
					<PopupBranch
						branchInfo={branchInfo}
						setChange={handleBranchChange}
						setPopup={setPopup}
						handleSubmit={handelBranchSubmit}
					/>
				)}
			</div>
		</>
	);
};

export default UserMgt;
