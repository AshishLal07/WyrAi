/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const InputField = ({title, val, setChange, name}) => {
	return (
		<>
			<div className=" relative w-11/12   px-3 mb-6 md:mb-0">
				<input
					className="appearance-none w-full  text-gray-700  border-2 border-gray-300 rounded box-content  pl-7 px-4 py-4 mb-3 leading-tight focus:outline-none"
					id="name"
					type="text"
					placeholder="Enter the Name of User"
					value={val}
					onChange={(e) => setChange(e)}
					name={name}
				/>
				<label
					className="absolute block top-[-26%] text-gray-500 bg-white tracking-tighter left-[10%] py-1 px-3  text-base mb-2"
					htmlFor="name"
				>
					{title}
				</label>
			</div>
		</>
	);
};

export default InputField;

// appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
//  block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2
// appearance-none w-full text-gray-700  border-2 border-gray-300 rounded pr-96 pl-7 px-4 py-5 mb-3 leading-tight focus:outline-none
