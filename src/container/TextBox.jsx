/* eslint-disable react/prop-types */
const TextBox = ({title, name, val, setChange}) => {
	return (
		<>
			<div className=" relative w-full mb-6 md:mb-0">
				<textarea
					id="name"
					value={val}
					onChange={(e) => setChange(e)}
					name={name}
					className="appearance-none w-full  text-gray-700  border rounded box-content  pl-7 px-4 py-6 mb-3 leading-tight focus:outline-none"
					cols="30"
					rows="5"
				></textarea>

				<label
					className="absolute block top-[-6%] text-gray-500 bg-white tracking-tighter left-[10%] py-1 px-3  text-base mb-2"
					htmlFor="name"
				>
					{title}
				</label>
			</div>
		</>
	);
};

export default TextBox;
