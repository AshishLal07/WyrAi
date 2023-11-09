/* eslint-disable react/prop-types */
const Input = ({label, name, value, onChange}) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				type="text"
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				className="mt-1 block w-full pl-2 pr-2 py-2 bg-gray-50 text-gray-900 placeholder-gray-400 border border-transparent rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-300"
				placeholder={label}
			/>
		</div>
	);
};

export default Input;
