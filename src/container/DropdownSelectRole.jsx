/* eslint-disable react/prop-types */
import {useState} from 'react';
import plus from '../assets/typcn_plus.svg';
import {userGloabalContext} from '../UserContext';

const DropdownSelectRole = ({title, name, setChange, popup, setPopup}) => {
	const {roleData} = userGloabalContext();
	const [val, setVal] = useState('');
	const [visible, setVisible] = useState(false);
	console.log(roleData);

	return (
		<>
			<div className="flex flex-col">
				<div className=" relative w-11/12  px-3 mb-6 md:mb-0">
					<input
						className={`appearance-none w-full text-start border-2 border-gray-300 rounded box-content  pl-7 px-4 py-4 mb-3 leading-tight focus:outline-none ${
							val.length === 0 ? 'text-gray-400' : 'text-black'
						}`}
						id="name"
						data-name="role"
						type="submit"
						placeholder="Enter the Name of User"
						value={val.length === 0 ? title : val}
						onClick={() => setVisible(!visible)}
						name={name}
					/>
					<label
						className="absolute block top-[-26%] text-gray-500 bg-white tracking-tighter left-[10%] py-1 px-3  text-base  $"
						htmlFor="name"
					>
						{title}
					</label>
				</div>
				{visible && (
					<div className="shadow ">
						<button
							className="flex justify-center items-center cursor-pointer pl-6 w-full gap-1 py-3 "
							onClick={() => setPopup(!popup)}
						>
							<img src={plus} alt="add" className="w-6 h-6" />
							<span className="text-[#1B9BEF] text-xs ">{title}</span>
						</button>
						<ul className="ml-6 h-[130px] overflow-y-auto cursor-pointer">
							{roleData.map((item, index) => (
								<li
									key={index}
									className="py-2"
									onClick={() => {
										setChange(name, item);
										setVal(`${item}`);
										setVisible(!visible);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default DropdownSelectRole;

// /* eslint-disable react/prop-types */
// import {useState} from 'react';

// const DropdownSelect = ({options}) => {
// 	const [selectedRole, setSelectedRole] = useState(options[0] || '');

// 	const handleChange = (event) => {
// 		setSelectedRole(event.target.value);
// 	};

// 	return (
// 		<div className="relative">
// 			<select
// 				value={selectedRole}
// 				onChange={handleChange}
// 				className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
// 			>
// 				{options.map((option, idx) => (
// 					<option key={idx} value={option}>
// 						{option}
// 					</option>
// 				))}
// 			</select>
// 			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// 				<svg
// 					className="fill-current h-4 w-4"
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 20 20"
// 				>
// 					<path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.269 0.257-0.627 0.385-0.985 0.385s-0.717-0.128-0.985-0.385l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
// 				</svg>
// 			</div>
// 		</div>
// 	);
// };

// export default DropdownSelect;
