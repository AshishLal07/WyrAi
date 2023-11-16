import {useState} from 'react';
import InputField from './InputField';
import TextBox from './TextBox';
import Checkbox from './Checkbox';
// import {useNavigate} from 'react-router-dom';
import {userGloabalContext} from '../UserContext';

const PopupRoles = ({setPopup}) => {
	const {fetchRole} = userGloabalContext();
	// const navigate = useNavigate();
	const [formData, setFormData] = useState({
		role: '',
		description: '',
	});

	const data = ['PoUpload', 'PoAcesss', 'PoVerify', 'PoUdate'];

	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSelectChange = (e) => {
		const {checked, name} = e.target;

		setSelectedOptions((prevSelectedOptions) =>
			checked
				? [...prevSelectedOptions, name]
				: prevSelectedOptions.filter((currentOption) => currentOption !== name)
		);
	};

	const handleSubmit = async () => {
		const data = {
			selectedOptions,
			formData,
		};
		console.log(data);

		const resp = await fetch('http://localhost:3000/role', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({data}),
		});

		if (resp.ok) {
			// navigate(-1);
			setPopup(false);
			fetchRole();
		}
	};

	return (
		<>
			<div className=" absolute top-[0%] left-[0%] bg-[#00000080] h-screen w-screen pt-[100px]">
				<div className="w-1/2 h-[624px] m-auto p-4 rounded-3xl bg-white flex flex-col justify-between items-center ">
					<h1 className="text-2xl mt-4 mb-6">Create Role</h1>
					<div className="w-full flex flex-col gap-5 ">
						<InputField
							label="Name of the Role"
							name="role"
							type="text"
							value={formData.role}
							onChange={handleInputChange}
							placeholder={'Name of the Role'}
							labelColor={'bg-white'}
						/>

						<div className="w-[92.5%]">
							<TextBox
								name={'description'}
								setChange={handleInputChange}
								title={'Description'}
								val={formData.description}
							/>
						</div>

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
						className="bg-blue text-white py-[10px] px-[45px] rounded-md"
					>
						save
					</button>
				</div>
			</div>
		</>
	);
};

export default PopupRoles;
