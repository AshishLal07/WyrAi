import {useState} from 'react';
import InputField from './InputField';
import TextBox from './TextBox';
import Checkbox from './Checkbox';

const PopupRoles = () => {
	const [formData, setFormData] = useState({
		role: '',
		description: '',
	});

	const data = ['PoUpload', 'PoAcesss', 'PoVerify', 'PoUdate'];

	const [selectedOptions, setSelectedOptions] = useState([]);

	// console.log(data);

	const handleInputChange = (e) => {
		// console.log(e.target.name);
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		// console.log(formData);
		// work left is add all true value of data to access form data
	};
	const handleSelectChange = (e) => {
		const {checked, name} = e.target;

		setSelectedOptions((prevSelectedOptions) =>
			checked
				? [...prevSelectedOptions, name]
				: prevSelectedOptions.filter((currentOption) => currentOption !== name)
		);
	};

	const handleSubmit = () => {
		console.log(formData, selectedOptions);
	};

	return (
		<>
			<div className=" absolute top-[0%] left-[0%] bg-[#00000080] h-screen w-screen pt-[100px]">
				<div className="w-1/2 h-[624px] m-auto p-4 rounded-3xl bg-white flex flex-col justify-between items-center ">
					<h1 className="text-2xl mt-4 mb-6">Create Role</h1>
					<div className="w-full flex flex-col gap-5">
						<InputField
							name={'role'}
							setChange={handleInputChange}
							title={'Name of the Role'}
							val={formData.role}
						/>
						<TextBox
							name={'description'}
							setChange={handleInputChange}
							title={'Description'}
							val={formData.description}
						/>
						<div className="ml-[36px]">
							<h1 className="text-base font-medium mb-[10px] ">
								Select Access
							</h1>
							<ul className="flex flex-col gap-[10px]">
								{/* {.map()} */}
								{data.map((item, index) => (
									<li key={index} className="flex gap-[5px]">
										<Checkbox
											label={item}
											name={item}
											check={selectedOptions}
											// setCheck={setCheck}
											setChange={handleSelectChange}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
					<button
						onClick={() => handleSubmit()}
						className="bg-blue-500 py-[10px] px-[45px] rounded-md"
					>
						save
					</button>
				</div>
			</div>
		</>
	);
};

export default PopupRoles;
