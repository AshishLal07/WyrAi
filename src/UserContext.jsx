/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {useContext, createContext, useState} from 'react';

const userContext = createContext();

export const UserContextProvider = ({children}) => {
	const branchData = [
		{
			location: 'Nsp, New Delhi',
			branchName: 'WYR.ai',
			country: 'India',
			city: 'Nsp',
			pincode: '110001',
		},
		{
			location: 'Nsp, New Delhi',
			branchName: 'WYR.ai',
			country: 'India',
			city: 'Nsp',
			pincode: '110001',
		},
	];
	const [branchInfo, setBranchInfo] = useState({
		location: '',
		branchName: '',
		country: '',
		city: '',
		pincode: '',
	});

	// console.log(branchData.length, branchData[0].location);

	const handleBranchChange = (e) => {
		setBranchInfo({...branchInfo, [e.target.name]: e.target.value});
		console.log(branchInfo);
	};

	return (
		<>
			<userContext.Provider
				value={{branchData, branchInfo, handleBranchChange}}
			>
				{children}
			</userContext.Provider>
		</>
	);
};

export const userGloabalContext = () => useContext(userContext);
