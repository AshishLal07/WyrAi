import logo from '../assets/logo.svg';
import upload from '../assets/formkit_uploadcloud.svg';
import UploadFiles from '../container/UploadFiles';
import {useState} from 'react';

const CompanyDetailsForm = () => {
	// Placeholder function for form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle the form submission
		console.log('Form submitted');
	};
	const [imgPopup, setImgPopup] = useState(false);
	const [docPopup, setDocPopup] = useState(false);

	return (
		<>
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 rounded-lg shadow-lg border-2 w-3/5 "
				>
					<div className="mb-6">
						<img src={logo} alt="" className="m-auto" />
						<h2 className="text-xl font-bold text-center mb-4">
							Company Details
						</h2>

						<label className="block mb-2">
							<input
								type="text"
								placeholder="Enter Your Company Name"
								className="w-full px-3 py-2 border rounded"
							/>
						</label>

						<label className="block mb-2">
							<input
								type="text"
								placeholder="Enter Your Company Address"
								className="w-full px-3 py-2 border rounded"
							/>
						</label>

						<div className="flex gap-4 mb-2">
							<label className="flex-1">
								<select className="w-full px-3 py-2 border rounded text-gray-400">
									<option>Select The Country</option>
									{/* Add country options here */}
								</select>
							</label>
						</div>

						<div className="flex gap-4 mb-6">
							<label className="flex-1">
								<input
									type="text"
									placeholder="Enter City"
									className="w-full px-3 py-2 border rounded"
								/>
							</label>
							<label className="flex-1">
								<input
									type="text"
									placeholder="Enter Pincode"
									className="w-full px-3 py-2 border rounded"
								/>
							</label>
						</div>

						<div className="flex gap-4 mb-6">
							<button
								type="button"
								className="flex-1 px-3 py-2 border-dashed border-2 rounded text-gray-500"
								onClick={() => setDocPopup(true)}
							>
								<div className=" ">
									<img src={upload} alt="cloud" className="m-auto" />
									<p className="text-center">
										Upload Documents/License/Certification
									</p>
								</div>
							</button>
							<button
								type="button"
								className="flex-1 px-3 py-2 border-dashed border-2 rounded text-gray-500"
								onClick={() => setImgPopup(true)}
							>
								<div className=" ">
									<img src={upload} alt="cloud" className="m-auto" />
									<p className="text-center">Upload Company images</p>
								</div>
							</button>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
						>
							Finish
						</button>
					</div>
				</form>
			</div>
			{docPopup && (
				<UploadFiles title={'Upload Documents/License/Certification'} />
			)}
			{imgPopup && <UploadFiles title={'Upload Company Image'} />}
		</>
	);
};

export default CompanyDetailsForm;
