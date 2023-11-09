/* eslint-disable react/prop-types */

import vector from '../assets/Vector.svg';

const ClientOptions = ({icon, style, setStyle}) => {
	return (
		<>
			<div
				className="relative rounded-full w-[200px] h-[200px] flex justify-center items-center shadow-[0_1px_14px_0px_rgba(0,0,0,0.15)] cursor-pointer  focus:border focus:border-blue-500"
				// style
				// 		? 'relative rounded-full w-[200px] h-[200px] flex justify-center items-center shadow-[0_1px_14px_0px_rgba(0,0,0,0.15)] cursor-pointer '
				// 		: 'relative rounded-full w-[200px] h-[200px] flex justify-center items-center shadow-[0_1px_14px_0px_rgba(0,0,0,0.15)] cursor-pointer border-[5px] border-blue-500'
				// 'relative rounded-full w-[200px] h-[200px] flex justify-center items-center shadow-[0_1px_14px_0px_rgba(0,0,0,0.15)] cursor-pointer '
				onClick={() => setStyle(!style)}
			>
				<img src={icon} alt="logo" />
				<img
					src={vector}
					alt=""
					className={
						style
							? 'absolute w-10 h-10 top-0 right-0 hidden '
							: 'absolute w-10 h-10 top-0 right-0 block '
					}
				/>
			</div>
		</>
	);
};

export default ClientOptions;
