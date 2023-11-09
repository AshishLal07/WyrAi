import InputField from './InputField';
import SmallInputField from './SmallInputField';

const PopupBranch = () => {
	return (
		<>
			<div className=" absolute top-[0%] left-0 bg-[#00000080] h-screen w-screen pt-[100px]">
				<div className="w-1/2 h-[624px] m-auto  rounded-3xl gap-8 bg-white flex flex-col justify-start  ">
					<h1 className="text-2xl mt-4 mb-6 text-center">Add Branch</h1>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'role'}
							// setChange={handleInputChange}
							title={'Name of the Role'}

							// val={formData.role}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'role'}
							// setChange={handleInputChange}
							title={'Name of the Role'}
							// val={formData.role}
						/>
					</div>
					<div className="w-4/5 mx-auto">
						<InputField
							name={'role'}
							// setChange={handleInputChange}
							title={'Name of the Role'}
							// val={formData.role}
						/>
					</div>
					<div className=" w-4/5 mx-auto flex justify-center gap-5  ">
						<div>
							<SmallInputField />
						</div>
						<div>
							<SmallInputField />
						</div>
					</div>
					<button className="bg-blue-500 py-[10px] px-[45px] w-[131px] m-auto rounded-md">
						save
					</button>
				</div>
			</div>
		</>
	);
};

export default PopupBranch;
