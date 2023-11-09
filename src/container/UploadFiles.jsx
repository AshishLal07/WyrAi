import {useState} from 'react';
import upload1 from '../assets/formkit_uploadcloud1.svg';
import cross from '../assets/typcn_delete-outline.svg';

const UploadFiles = () => {
	const [files, setFiles] = useState([
		'aaaaaaa.pdf',
		'bbbbbbb.pdf',
		'ccccccc.pdf',
	]); // Dummy files array

	// Function to handle file selection
	const handleFileChange = (e) => {
		// Add file logic
		console.log(e.target.files);
	};

	// Function to remove file from list
	const removeFile = (fileName) => {
		setFiles(files.filter((file) => file !== fileName));
	};

	return (
		<>
			<div className=" ">
				<div className=" w-3/4 m-auto flex flex-col items-center justify-center p-4  bg-white">
					<div className="flex flex-col items-center mb-4 ">
						<div className=" ">
							<img src={upload1} alt="cloud" className="m-auto" />
							<p className="text-center">
								Upload Documents/License/Certification
							</p>
						</div>
						<span className="text-2xl font-bold text-blue-500  mt-2">
							Browse
						</span>
					</div>

					<ul className="w-full">
						{files.map((file, index) => (
							<li
								key={index}
								className="flex items-center justify-between px-4 py-2 mb-2 border-b"
							>
								<span className="text-sm">{file}</span>
								<button
									className="text-red-500 hover:text-red-700 border"
									onClick={() => removeFile(file)}
								>
									<img src={cross} alt="close" />
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default UploadFiles;

// &#x2715;
