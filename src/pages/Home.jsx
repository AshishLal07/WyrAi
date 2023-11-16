import {useState} from 'react';
import Buyer from '../assets/noun-buyer-5533532 1.svg';
import Agency from '../assets/noun-bulk-buying-3978894 1.svg';
import factory from '../assets/noun-factory-798041 1.svg';
import QC from '../assets/noun-preview-192680 1.svg';

import ClientOptions from '../container/ClientOptions';
const Home = () => {
	const [role, setRole] = useState([
		{id: 0, name: 'Buyer', icon: Buyer, selected: false},
		{id: 1, name: 'BuyingAgency', icon: Agency, selected: false},
		{id: 2, name: 'Factory', icon: factory, selected: false},
		{id: 3, name: 'QC Agency', icon: QC, selected: false},
	]);

	const handleSubmit = () => {
		// console.log(role);
		// const data = role.find((item) => {
		// 	console.log(item.selected);
		// 	item.selected === true;
		// });
	};

	return (
		<div>
			<div className=" h-screen w-3/4 m-auto ">
				<div className="flex-col justify-center">
					<div className="text-center mt-[200px] mb-[120px]">
						<h4 className="text-base">Please Tell Us</h4>
						<h2 className="text-[32px] text-[#1B9BEF] ">WHAT YOU DO</h2>
					</div>

					<div className="container flex flex-wrap justify-between gap-20">
						{role?.length > 0 &&
							role.map((item) => (
								<ClientOptions
									icon={item.icon}
									role={role}
									setRole={setRole}
									selected={item.selected}
									key={item.id}
									id={item.id}
								></ClientOptions>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
