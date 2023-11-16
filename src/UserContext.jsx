/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {useContext, createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const userContext = createContext();

export const UserContextProvider = ({children}) => {
	const navigate = useNavigate();
	const [branchData, setBranchData] = useState([]);
	const [roleData, setRoleData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [checkedItems, setCheckedItems] = useState([]);
	const [editData, setEditData] = useState([]);
	const [isEditMode, setIsEditMode] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		employeeId: '',
		email: '',
		phone: '',
		role: '',
		officeBranch: '',
	});

	const clearFieldData = () => {
		const clearedData = Object.fromEntries(
			Object.keys(formData).map((key) => [key, ''])
		);
		setFormData(clearedData);
	};

	const fetchBranch = async () => {
		const resp = await fetch('http://localhost:3000/getbranch');
		const data = await resp.json();
		console.log(data);
		setBranchData(data);
		console.log(data);
	};
	useEffect(() => {
		fetchBranch();
		fetchRole();
		fetchData();
	}, []);

	async function fetchData() {
		// You can await here
		// const response = await MyAPI.getData(someId);
		const resp = await fetch('http://localhost:3000/getUser');
		const data = await resp.json();

		setUserData([...data]);

		// console.log(userData);
	}

	// const roleData = [
	// 	'Create Role',
	// 	'Senior Buyer',
	// 	'Admin',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// ];
	// const branchData = [
	// 	'Create Role',
	// 	'Senior Buyer',
	// 	'Admin',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// 	'Junior Buyer',
	// ];

	const [branchInfo, setBranchInfo] = useState({
		location: '',
		branchName: '',
		country: '',
		city: '',
		pincode: '',
	});

	const handleBranchChange = (e) => {
		setBranchInfo({...branchInfo, [e.target.name]: e.target.value});
		console.log(branchInfo);
	};

	const handelBranchSubmit = async () => {
		console.log(branchInfo, 'test');
		const resp = await fetch('http://localhost:3000/branch', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({data: branchInfo}),
		});

		if (resp.ok) {
			navigate('/user');
		}
	};

	async function fetchRole() {
		// You can await here
		// const response = await MyAPI.getData(someId);
		const resp = await fetch('http://localhost:3000/getrole');
		const data = await resp.json();
		console.log(data);
		data.map((item) => {
			// setEditData([...item]);
			console.log(item);
			setRoleData([...roleData, item.role]);
		});

		console.log(roleData);
	}
	console.log(formData);

	const edit = (e) => {
		console.log(e[0]);
		const id = e[0];
		userData.forEach((item) => {
			if (item._id == id) {
				console.log(item);
				setEditData([item]);
				setFormData({
					name: item.name,
					email: item.email,
					employeeId: item.employeeId,
					officeBranch: item.officeBranch,
					phone: item.phone,
					role: item.role,
				});
				setCheckedItems([]);
				setIsEditMode(!isEditMode);
				navigate('/add');
			}
		});
	};
	console.log(checkedItems, isEditMode);

	// PurchaseOrder
	const [comments, setComments] = useState([]);
	const [productList, setProductList] = useState({
		styleId: '',
		styleName: '',
		quantity: '',
		color: '',
		weight: '',
		weightTolerance: '',
		length: '',
		lengthTolerance: '',
		width: '',
		widthTolerance: '',
		height: '',
		heightTolerance: '',
		aql: '',
		// comments: '', //this can have many comments so, when sent as Array of comments
	});
	// console.log(setProductList);

	return (
		<>
			<userContext.Provider
				value={{
					branchData,
					branchInfo,
					roleData,
					userData,
					checkedItems,
					editData,
					formData,
					isEditMode,
					comments,
					productList,
					clearFieldData,
					setProductList,
					setComments,
					setIsEditMode,
					setFormData,
					setEditData,
					edit,
					setUserData,
					fetchData,
					fetchRole,
					fetchBranch,
					handleBranchChange,
					handelBranchSubmit,
					setCheckedItems,
				}}
			>
				{children}
			</userContext.Provider>
		</>
	);
};

export const userGloabalContext = () => useContext(userContext);
