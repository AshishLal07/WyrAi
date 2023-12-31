/* eslint-disable react/prop-types */
import {userGloabalContext} from '../UserContext';
import InputField from './InputField';

// eslint-disable-next-line react/prop-types
const PopupBranch = ({branchInfo, setChange, handleSubmit, setPopup}) => {
	const {fetchBranch} = userGloabalContext();

	return (
		<>
			<div className=" absolute top-[0%] left-0 bg-[#00000080] h-screen w-screen pt-[100px]">
				<div className="w-1/2 h-[624px] m-auto  rounded-3xl gap-8 bg-white flex flex-col justify-start  ">
					<h1 className="text-2xl mt-4 mb-6 text-center">Add Branch</h1>
					<div className="w-4/5 mx-auto">
						<InputField
							label="Branch Name"
							name="branchName"
							type="text"
							value={branchInfo.name}
							onChange={setChange}
							placeholder={'Branch Name'}
							labelColor={'bg-white'}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							label="Enter the address of the branch"
							name="location"
							type="text"
							value={branchInfo.address}
							onChange={setChange}
							placeholder={'Enter the address of the branch'}
							labelColor={'bg-white'}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							label="Country"
							name="country"
							type="text"
							value={branchInfo.country}
							onChange={setChange}
							placeholder={'Country'}
							labelColor={'bg-white'}
						/>
					</div>
					<div className=" w-[80%] mx-auto flex justify-center gap-5  ">
						<div className="flex-1">
							<InputField
								label="City"
								name="city"
								type="text"
								value={branchInfo.city}
								onChange={setChange}
								placeholder={'City'}
								labelColor={'bg-white'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								label="Pincode"
								name="pincode"
								type="text"
								value={branchInfo.pincode}
								onChange={setChange}
								placeholder={'Pincode'}
								labelColor={'bg-white'}
							/>
						</div>
					</div>
					<button
						className="bg-blue py-[10px] px-[45px] w-[131px] text-white m-auto rounded-md"
						onClick={() => {
							handleSubmit();
							fetchBranch();
							setPopup(false);
						}}
					>
						save
					</button>
				</div>
			</div>
		</>
	);
};

export default PopupBranch;
