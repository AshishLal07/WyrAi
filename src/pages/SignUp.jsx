import {useState} from 'react';

import logo from '../assets/logo.svg';
import PopupOtp from '../container/PopupOtp';

const SignUp = () => {
	const [popup, setPopup] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Implement the form submission logic here

		const resp = await fetch('http://localhost:3000/otpGen', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email: formData.email}),
		});
		console.log(resp);
	};
	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8 shadow-lg border-2 rounded-lg px-4 py-6 bg-white">
					<div>
						<img src={logo} alt="" className="m-auto" />
						<h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
							Sign Up
						</h2>
					</div>
					<form className="mt-8 space-y-6 mx-6" onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							className="appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Enter Your Name"
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							type="email"
							name="email"
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Enter Your Email"
							value={formData.email}
							onChange={handleChange}
						/>
						<input
							type="tel"
							name="phoneNumber"
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Enter Your Phone number"
							value={formData.phoneNumber}
							onChange={handleChange}
						/>
						<input
							type="password"
							name="password"
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Create Password"
							value={formData.password}
							onChange={handleChange}
						/>
						<input
							type="password"
							name="confirmPassword"
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Re-enter Password"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
						<p className="text-xs ">Password should be alpha-numeric</p>
						<div>
							<button
								type="submit"
								onClick={() => setPopup(!popup)}
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1b9bef] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Generate OTP
							</button>
							<p className="text-center text-sm text-gray-500">
								OTP will send to your register Email id
							</p>
						</div>
					</form>
					<div className="text-sm text-center">
						Already Registered?{' '}
						<a
							href="/signin"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Sign In
						</a>
					</div>
				</div>
			</div>

			{popup && (
				<PopupOtp setPopup={setPopup} popup={popup} formData={formData} />
			)}
		</>
	);
};

export default SignUp;
