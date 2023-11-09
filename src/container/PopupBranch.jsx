/* eslint-disable react/prop-types */
import InputField from './InputField';
import SmallInputField from './SmallInputField';

// eslint-disable-next-line react/prop-types
const PopupBranch = ({branchInfo, setChange, handleSubmit, setPopup}) => {
	return (
		<>
			<div className=" absolute top-[0%] left-0 bg-[#00000080] h-screen w-screen pt-[100px]">
				<div className="w-1/2 h-[624px] m-auto  rounded-3xl gap-8 bg-white flex flex-col justify-start  ">
					<h1 className="text-2xl mt-4 mb-6 text-center">Add Branch</h1>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'branchName'}
							setChange={setChange}
							title={'Branch Name'}
							val={branchInfo.name}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'location'}
							setChange={setChange}
							title={'Enter the address of the branch'}
							val={branchInfo.location}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'country'}
							setChange={setChange}
							title={'Country'}
							val={branchInfo.country}
						/>
					</div>
					<div className=" w-[80%] mx-auto flex justify-center gap-5  ">
						<div className="flex-1">
							<SmallInputField
								name={'city'}
								setChange={setChange}
								title={'City'}
								val={branchInfo.city}
							/>
						</div>
						<div className="flex-1">
							<SmallInputField
								name={'pincode'}
								setChange={setChange}
								title={'Pincode'}
								val={branchInfo.pincode}
							/>
						</div>
					</div>
					<button
						className="bg-blue-500 py-[10px] px-[45px] w-[131px] m-auto rounded-md"
						onClick={() => {
							handleSubmit();
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
