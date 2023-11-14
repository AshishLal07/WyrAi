import {useFormik} from 'formik';
import * as Yup from 'yup';
import DropZone from '../Components/DropZone';
import {useState} from 'react';
import {RxCrossCircled} from 'react-icons/rx';

const UploadImages = () => {
	const [imagesFiles, setImagesFiles] = useState(null);
	const ImageUploadSchema = Yup.object().shape({
		backImage: Yup.mixed().required('A back image is required'),
		frontImage: Yup.mixed().required('A front image is required'),
		careLabel: Yup.mixed().required('A back image is required'),
		sizeLabel: Yup.mixed().required('A front image is required'),
		// Add additional validation rules for other fields
	});

	const initialValues = {
		backImage: undefined,
		frontImage: undefined,
		careLabel: undefined,
		sizeLabel: undefined,
	};
	const formik = useFormik({
		initialValues,
		onSubmit: (values) => handleSubmit(values),
		ImageUploadSchema,
	});

	const handleSubmit = async () => {};
	console.log(imagesFiles);

	return (
		<>
			<div className="bg-gray-200 h-[60vh] relative rounded-2xl">
				<form className="p-5">
					<h1 className="text-center mb-5">Upload Images</h1>

					<div className="grid md:grid-cols-4 gap-10 ">
						<div>
							<h3 className=" text-sm text-center">Back</h3>
							<DropZone
								onDrop={formik.handleChange}
								multiple={false}
								message={'Drag To Upload Image'}
							/>
						</div>
						<div>
							<h3 className="text-sm text-center">Front</h3>
							<DropZone
								onDrop={setImagesFiles}
								multiple={false}
								message={'Drag To Upload Image'}
							/>
						</div>
						<div>
							<h3 className="text-sm text-center">Care Lable</h3>
							<DropZone
								onDrop={setImagesFiles}
								multiple={false}
								message={'Drag To Upload Image'}
							/>
						</div>
						<div>
							<h3 className="text-sm text-center">Size Lable</h3>
							<DropZone
								onDrop={setImagesFiles}
								multiple={false}
								message={'Drag To Upload Image'}
							/>
						</div>
					</div>
				</form>
				<RxCrossCircled className=" text-3xl absolute md:top-[1vh] md:right-[1vh] cursor-pointer " />
			</div>
		</>
	);
};

export default UploadImages;

// {/* <label htmlFor="backImage">Back</label>
// 						<input
// 							id="backImage"
// 							name="backImage"
// 							type="file"
// 							onChange={(event) => {
// 								formik.setFieldValue('backImage', event.currentTarget.files[0]);
// 								// setFieldValue('backImage', event.currentTarget.files[0]);
// 							}}

// 						/>

// 						{/* ... other fields ... */}

// 						<label htmlFor="frontImage">Front</label>
// 						<input
// 							id="frontImage"
// 							name="frontImage"
// 							type="file"
// 							onChange={(event) => {
// 								formik.setFieldValue(
// 									'frontImage',
// 									event.currentTarget.files[0]
// 								);
// 							}}
// 						/>
// 						{/* ... other fields ... */}
// 						<label htmlFor="careLabel">Front</label>
// 						<input
// 							id="careLabel"
// 							name="careLabel"
// 							type="file"
// 							onChange={(event) => {
// 								formik.setFieldValue('careLabel', event.currentTarget.files[0]);
// 							}}
// 						/>
// 						{/* ... other fields ... */}
// 						<label htmlFor="sizeLabel">Front</label>
// 						<input
// 							id="sizeLabel"
// 							name="sizeLabel"
// 							type="file"
// 							onChange={(event) => {
// 								formik.setFieldValue('sizeLabel', event.currentTarget.files[0]);
// 							}}
// 						/>
// 						... other fields ... */}
