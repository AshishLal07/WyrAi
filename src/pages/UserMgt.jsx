import work from '../assets/noun-work-5949579.svg';
import select from '../assets/noun-select-all-4671270 1.svg';
import plus from '../assets/typcn_plus.svg';
import gps from '../assets/ion_location-outline.svg';
import UserCard from '../container/userCard'; //change the name of the file later
import {useState} from 'react';
import {Link} from 'react-router-dom';
import PopupBranch from '../container/PopupBranch';
import {userGloabalContext} from '../UserContext';

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
		const resp = await fetch('http://localhost:5000/api/deleteEmploye', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({userIds: checkedItems}),
		});

		fetchData();
	};

	// console.log(branchData.length, branchData[0].location);

	// const handleBranchChange = (e) => {
	// 	setBranchInfo({...branchInfo, [e.target.name]: e.target.value});
	// 	console.log(branchInfo);
	// };

	return (
		<>
			<div className="flex flex-col w-11/12 h-full">
				<header className="mt-8 w-full flex gap-5 justify-end mb-6">
					<div className="flex gap-5 items-center">
						{checkedItems.length === 1 && (
							<button onClick={() => edit(checkedItems)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M16.999 2.42931L15.8401 3.61126C17.0227 4.79321 18.2053 5.97516 19.3879 7.15711L20.5705 5.9988C22.2261 4.32043 18.6783 0.774572 16.999 2.42931ZM3.30458 16.1163C2.9025 17.1801 2.50042 18.2438 2.07468 19.2839C1.7199 20.3477 2.68963 21.2933 3.70666 20.915L6.87602 19.6858L18.8439 7.70081C17.6613 6.51886 16.4787 5.33691 15.2961 4.15496L3.30458 16.1163ZM4.36892 16.8255L15.2961 5.90425L17.0936 7.70081L6.19011 18.6221L3.25728 19.7567C3.23363 19.7567 3.23363 19.7567 3.23363 19.7331L4.36892 16.8255Z"
										fill="#1B9BEF"
									/>
								</svg>
								<span>Edit</span>
							</button>
						)}
						{checkedItems.length >= 1 && (
							<button onClick={() => handleDelete()}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M17.97 4.12605H14.67C14.67 3.31847 14.3492 2.54396 13.7781 1.97291C13.2071 1.40187 12.4326 1.08105 11.625 1.08105C10.8174 1.08105 10.0429 1.40187 9.47186 1.97291C8.90081 2.54396 8.58 3.31847 8.58 4.12605H5.28C4.78512 4.12194 4.30836 4.31209 3.95216 4.65567C3.59596 4.99926 3.38873 5.46884 3.375 5.96355V6.78855C3.38286 7.24456 3.55599 7.6822 3.86222 8.02017C4.16846 8.35813 4.58698 8.57343 5.04 8.62605V19.5761C5.03102 19.9027 5.08662 20.2279 5.20361 20.533C5.32061 20.8382 5.49669 21.1172 5.72175 21.3541C5.94682 21.591 6.21644 21.7811 6.51516 21.9136C6.81388 22.0461 7.13582 22.1183 7.4625 22.1261H15.7875C16.4446 22.1103 17.0687 21.8346 17.5228 21.3594C17.977 20.8842 18.2241 20.2482 18.21 19.5911V8.62605C18.663 8.57343 19.0815 8.35813 19.3878 8.02017C19.694 7.6822 19.8671 7.24456 19.875 6.78855V5.96355C19.8613 5.46884 19.654 4.99926 19.2978 4.65567C18.9416 4.31209 18.4649 4.12194 17.97 4.12605ZM11.625 2.62605C12.0228 2.62605 12.4044 2.78409 12.6857 3.06539C12.967 3.3467 13.125 3.72823 13.125 4.12605H10.125C10.125 3.72823 10.283 3.3467 10.5643 3.06539C10.8456 2.78409 11.2272 2.62605 11.625 2.62605ZM15.7875 20.6261H7.4625C7.20641 20.6068 6.96825 20.4874 6.79974 20.2936C6.63123 20.0998 6.54598 19.8473 6.5625 19.5911V8.66356H16.6875V19.5911C16.704 19.8473 16.6188 20.0998 16.4503 20.2936C16.2817 20.4874 16.0436 20.6068 15.7875 20.6261ZM18.375 6.78855C18.375 6.83844 18.3651 6.88782 18.3458 6.93381C18.3264 6.97981 18.2981 7.02148 18.2625 7.05641C18.2269 7.09133 18.1847 7.11879 18.1383 7.13719C18.0919 7.15559 18.0424 7.16455 17.9925 7.16356H5.28C5.22829 7.16771 5.17628 7.16108 5.12726 7.1441C5.07825 7.12712 5.03328 7.10016 4.99522 7.06492C4.95716 7.02967 4.92682 6.98691 4.90613 6.93934C4.88543 6.89178 4.87483 6.84043 4.875 6.78855V5.96355C4.88451 5.86532 4.93237 5.77481 5.00818 5.71163C5.084 5.64845 5.18166 5.6177 5.28 5.62605H17.97C18.0199 5.62506 18.0694 5.63402 18.1158 5.65242C18.1622 5.67082 18.2044 5.69828 18.24 5.7332C18.2756 5.76812 18.3039 5.8098 18.3233 5.85579C18.3426 5.90179 18.3525 5.95117 18.3525 6.00105L18.375 6.78855ZM10.125 11.4686V17.6261C10.125 17.825 10.046 18.0157 9.90533 18.1564C9.76468 18.297 9.57391 18.3761 9.375 18.3761C9.17609 18.3761 8.98532 18.297 8.84467 18.1564C8.70402 18.0157 8.625 17.825 8.625 17.6261V11.4686C8.625 11.2696 8.70402 11.0789 8.84467 10.9382C8.98532 10.7976 9.17609 10.7186 9.375 10.7186C9.57391 10.7186 9.76468 10.7976 9.90533 10.9382C10.046 11.0789 10.125 11.2696 10.125 11.4686ZM14.7 11.4686V17.6261C14.7 17.825 14.621 18.0157 14.4803 18.1564C14.3397 18.297 14.1489 18.3761 13.95 18.3761C13.7511 18.3761 13.5603 18.297 13.4197 18.1564C13.279 18.0157 13.2 17.825 13.2 17.6261V11.4686C13.2 11.2696 13.279 11.0789 13.4197 10.9382C13.5603 10.7976 13.7511 10.7186 13.95 10.7186C14.1489 10.7186 14.3397 10.7976 14.4803 10.9382C14.621 11.0789 14.7 11.2696 14.7 11.4686Z"
										fill="white"
									/>
								</svg>
								<span>Delete</span>
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
											className="flex items-center pl-5 gap-3 py-3 h-14 hover:bg-[#1B9BEF14] "
										>
											<img src={gps} className="" alt="gps" />
											<div className="flex flex-col ">
												<span className="text-[14px] font-medium">
													{' '}
													{item.branchName}
												</span>
												<span className="text-xs">{item.location}</span>
											</div>
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
					<div className="grid  grid-cols-3  h-24 gap-4">
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
