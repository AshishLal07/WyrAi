import {useState} from 'react';
import InputField from './InputField';
import TextBox from './TextBox';
import Checkbox from './Checkbox';

const PopupRoles = () => {
	const [formData, setFormData] = useState({
		role: '',
		description: '',
		access: {},
	});
	// const [check, setCheck] = useState(false);
	const [data, setData] = useState({
		PoUpload: false,
		PoAcesss: false,
		PoVerify: false,
		PoUdate: false,
	});

	console.log(data);

	const handleInputChange = (e) => {
		console.log(e.target.name);
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// work left is add all true value of data to access form data
	};
	const handleSelectChange = (e) => {
		// console.log(e.target.name);
		const {checked, name} = e.target;
		if (checked) {
			setData({...data, [name]: true});
			Object.entries(data).map((key) => {
				if (key[1] === true) {
					console.log(key);
					// setFormData((prev => {...prev,}));
				}
			});
			setFormData({...formData});
			console.log(formData);
		} else {
			setData({...data, [name]: false});
			// formData.access.filter((item) => item[0] != key[0]);
		}

		// const {name, value} = e.target;
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
								{Object.keys(data).map((item, index) => (
									<li key={index} className="flex gap-[5px]">
										<Checkbox
											label={item}
											name={item}
											check={data}
											// setCheck={setCheck}
											setChange={handleSelectChange}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
					<button className="bg-blue-500 py-[10px] px-[45px]">save</button>
				</div>
			</div>
		</>
	);
};

export default PopupRoles;
