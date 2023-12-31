import {useState} from 'react';
import InputField from './InputField';
import upload from '../assets/formkit_uploadcloud1.svg';
import comment from '../assets/noun-add-comment-5035165 1.svg';
import down from '../assets/mingcute_up-fill (1).svg';
import up from '../assets/mingcute_up-fill.svg';
import add from '../assets/noun-add-5479406 1.svg';

import {useFormik} from 'formik';
import * as Yup from 'yup';

// import DropZone from '../Components/DropZone';
import CommentBox from './CommentBox';
import {userGloabalContext} from '../UserContext';
// import UploadImages from './UploadImages';

const Products = () => {
	const [collapse, setCollapse] = useState(false);
	const [togglePopup, setTogglePopup] = useState(false);
	const {productList, setProductList, comments, setComments} =
		userGloabalContext();
	// console.log(setProductList);
	// const [comments, setComments] = useState([]);

	// const [productsList, setProductList] = useState({
	// 	styleId: '',
	// 	styleName: '',
	// 	quantity: '',
	// 	color: '',
	// 	weight: '',
	// 	weightTolerance: '',
	// 	length: '',
	// 	lengthTolerance: '',
	// 	width: '',
	// 	widthTolerance: '',
	// 	height: '',
	// 	heightTolerance: '',
	// 	aql: '',
	// 	// comments: '', //this can have many comments so, when sent as Array of comments
	// });

	const validationSchema = Yup.object().shape({
		styleId: Yup.string().required('Style ID is required'),
		styleName: Yup.string().required('Style Name is required'),
		quantity: Yup.number()
			.positive()
			.integer()
			.required('Quantity is required'),
		color: Yup.string().required('Color is required'),
		weight: Yup.number().positive().required('Weight is required'),
		weightTolerance: Yup.number()
			.positive()
			.required('Weight Tolerance is required'),
		length: Yup.number().positive().required('Length is required'),
		lengthTolerance: Yup.number()
			.positive()
			.required('Length Tolerance is required'),
		width: Yup.number().positive().required('Width is required'),
		widthTolerance: Yup.number()
			.positive()
			.required('Width Tolerance is required'),
		height: Yup.number().positive().required('Height is required'),
		heightTolerance: Yup.number()
			.positive()
			.required('Height Tolerance is required'),
		aql: Yup.number().positive().required('AQL is required'),
	});

	const initialValues = {
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
	};
	const formik = useFormik({
		initialValues,
		onSubmit: (values) => handleSubmit(values),
		validationSchema,
	});

	async function handleSubmit(values) {
		try {
			console.log(values);
		} catch (error) {
			console.error(error);
		}
	}
	const handleChange = (e) => {
		console.log('test');
		const {name, value} = e.target;
		console.log(name, value);
		setProductList({...productList, [name]: value});
		formik.handleChange(e);
	};
	console.log(productList);

	return (
		<>
			<div className="relative">
				{collapse ? (
					<div className={` flex flex-col gap-8 bg-gray-50 p-10`}>
						<div className="flex flex-col gap-5">
							<div className="relative flex flex-col md:flex-row  gap-5 ">
								<div className="  w-[30vh] rounded-md overflow-hidden flex">
									<div className=" w-full outline-dashed outline-gray-300 flex flex-col items-center justify-center  m-1 mb-4  bg-white">
										<div className="flex flex-col items-center mb-4 ">
											<div className=" ">
												<img src={upload} alt="cloud" className="m-auto" />
												<img
													src={add}
													alt="cloud"
													className="h-12 w-12 text-blue absolute top-[-4%] right-[-8%] md:top-[-3vh] md:left-[14vw]"
												/>
												<p className="text-center text-xs font-[600]">
													{'Upload Approved Sample'}
												</p>
												<p className="text-sm font-bold text-center text-blue">
													Or Browse
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5 w-full">
									<div className="">
										<InputField
											label="StyleId"
											name="styleId"
											type="text"
											value={formik.values.styleId}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={formik.touched.styleId && formik.errors.styleId}
											placeholder={'ST ED BC 3220 W'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
									<div className="">
										<InputField
											label={'Style Name'}
											name={'styleName'}
											type="text"
											value={formik.values.styleName}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={
												formik.touched.styleName && formik.errors.styleName
											}
											placeholder={'BH1222 Marri Welcome'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
									<div className="">
										<InputField
											label={'Quantity'}
											name={'quantity'}
											type="text"
											value={formik.values.quantity}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={formik.touched.quantity && formik.errors.quantity}
											placeholder={'600'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
									<div className="">
										<InputField
											label={'Color'}
											name={'color'}
											type="text"
											value={formik.values.color}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={formik.touched.color && formik.errors.color}
											placeholder={'Nat 75/25'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full ">
								<div className="">
									<InputField
										name={'weight'}
										label={'Weight'}
										type="text"
										value={formik.values.weight}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.weight && formik.errors.weight}
										placeholder={'500GMS'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'weightTolerance'}
										label={'WeightTolerance'}
										type="text"
										value={formik.values.weightTolerance}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.weightTolerance &&
											formik.errors.weightTolerance
										}
										placeholder={`2%`}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'length'}
										label={'Length'}
										type="text"
										value={formik.values.length}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.length && formik.errors.length}
										placeholder={'2.5'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'lengthTolerance'}
										label={'Length Tolerance'}
										type="text"
										value={formik.values.lengthTolerance}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.lengthTolerance &&
											formik.errors.lengthTolerance
										}
										placeholder={'2%'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'width'}
										label={'Width'}
										type="text"
										value={formik.values.width}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.width && formik.errors.width}
										placeholder={'2.5'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'widthTolerance'}
										label={'Width Tolerance'}
										type="text"
										value={formik.values.widthTolerance}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.widthTolerance &&
											formik.errors.widthTolerance
										}
										placeholder={'2%'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'height'}
										label={'Height'}
										type="text"
										value={formik.values.height}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.height && formik.errors.height}
										placeholder={'2.5'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className="">
									<InputField
										name={'heightTolerance'}
										label={'Height Tolerance'}
										type="text"
										value={formik.values.heightTolerance}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.heightTolerance &&
											formik.errors.heightTolerance
										}
										placeholder={'2.3%'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
							</div>

							<div className="flex flex-col md:flex-row items-center gap-2">
								<div className="md:flex-none w-full md:w-[30vh] ">
									<InputField
										name={'aql'}
										label={'AQL'}
										type="text"
										value={formik.values.aql}
										onChange={handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.aql && formik.errors.aql}
										placeholder={'1.6'}
										labelColor={'bg-slimeGray'}
									/>
								</div>
								<div className=" relative flex flex-col gap-2 md:flex-1 mb-4">
									<div className="flex gap-4 justify-start md:pl-8  items-center text-xs">
										<p className="">12 Oct 2023 </p>
										<p className="">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry.
										</p>
									</div>
									<div className="flex gap-4 justify-start md:pl-8  items-center text-xs">
										<p className="">12 Oct 2023 </p>
										<p className="">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry.
										</p>
									</div>
								</div>
								<div
									className="flex md:flex-none justify-center items-center cursor-pointer  gap-1 pb-6 "
									onClick={() => {
										setTogglePopup(true);
									}}
								>
									<img src={comment} alt="add" className="w-6 h-6" />
									<span className="text-[#1B9BEF] text-sm font-bold">
										{'Comments'}
									</span>
								</div>

								{togglePopup && (
									<CommentBox
										comments={comments}
										setComments={setComments}
										setTogglePopup={setTogglePopup}
									/>
								)}
							</div>
						</div>
					</div>
				) : (
					<div className={` bg-gray-50 p-10`}>
						<div className="flex flex-col gap-5">
							<div className="flex flex-col md:flex-row gap-5 items-center ">
								<div className=" w-[30vh] rounded-md overflow-hidden flex">
									<div className=" w-full outline-dashed outline-gray-300 flex flex-col items-center justify-center m-1  bg-white">
										<div className="flex flex-col items-center mb-4 ">
											<div className=" ">
												<img src={upload} alt="cloud" className="m-auto" />
												<img
													src={add}
													alt="cloud"
													className="h-12 w-12 text-blue absolute top-[5%] right-[8%] md:top-[2vh] md:left-[17vw]"
												/>
												<p className="text-center text-xs font-[600]">
													{'Upload Approved Sample'}
												</p>
												<p className="text-sm font-bold text-center text-blue">
													Or Browse
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5 w-full">
									<div className="flex-1">
										<InputField
											label="StyleId"
											name="styleId"
											type="text"
											value={formik.values.styleId}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={formik.touched.styleId && formik.errors.styleId}
											placeholder={'ST ED BC 3220 W'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
									<div className="flex-1">
										<InputField
											label={'Style Name'}
											name={'styleName'}
											type="text"
											value={formik.values.styleName}
											onChange={handleChange}
											onBlur={formik.handleBlur}
											error={
												formik.touched.styleName && formik.errors.styleName
											}
											placeholder={'BH1222 Marri Welcome'}
											labelColor={'bg-slimeGray'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{!togglePopup && (
					<div onClick={() => setCollapse(!collapse)}>
						{collapse ? (
							<img
								src={down}
								alt=""
								className=" absolute top-[-2%] right-[-1%]  w-10 h-10 bg-white rounded-full "
							/>
						) : (
							<img
								src={up}
								alt=""
								className=" absolute top-[-2%] right-[-1%]  w-10 h-10 bg-white rounded-full "
							/>
						)}
					</div>
				)}

				{/* <UploadImages /> */}
			</div>
		</>
	);
};

export default Products;
