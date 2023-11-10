// import menu from '../assets/pepicons-pencil_dots-y.svg';

const userCard = ({check, setCheck, item}) => {
	function handleBtnCheck(e) {
		const {checked, name} = e.target;
		// console.log(checked, name);
		if (checked) {
			setCheck([...check, name]);
		} else {
			setCheck([...check.filter((user) => user !== name)]);
		}
		console.log(check);
	}

	return (
		<div className="w-[80%] h-[100px] rounded overflow-hidden shadow-lg bg-white  flex flex-col items-center">
			<div className="flex justify-between w-full pt-1 pl-1  ">
				<input
					type="checkbox"
					name={item._id}
					onChange={handleBtnCheck}
					className="border-none"
				/>

				{/* <button className="text-gray-500">
					<img src={menu} alt="" />
				</button> */}
			</div>
			<div className=" w-full pl-4 flex gap-2">
				<div className="w-16 h-16 rounded-full bg-red-500"></div>
				{/* <img className="" src="path-to-your-image.jpg" alt="Profile face" /> */}
				<div className="flex flex-col justify-between ">
					<p className="text-gray-500 text-xs">{item.employeeId}</p>
					<div className="text-gray-500  text-xs ">{item.name}</div>
					<p className="text-gray-700 text-sm">{item.role}</p>
				</div>
			</div>
		</div>
	);
};

export default userCard;
