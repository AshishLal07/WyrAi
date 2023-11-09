import InputField from './InputField';
import upload from '../assets/formkit_uploadcloud1.svg';
import comment from '../assets/noun-add-comment-5035165 1.svg';
import down from '../assets/mingcute_up-fill (1).svg';
import up from '../assets/mingcute_up-fill.svg';
import {useState} from 'react';

const Products = () => {
	const [collapse, setCollapse] = useState();
	return (
		<>
			<div className={` relative flex flex-col gap-8 bg-gray-100 p-10`}>
				<div className="flex flex-col gap-5">
					<div className="flex ">
						<div className="outline-dashed p-4 flex-0.5 outline-gray-200">
							<img src={upload} alt="cloud" className="m-auto" />
							<p className="flex flex-col justify-center items-center text-xs">
								<span>Upload Reference Image</span>
								<span className="text-[#1B9BEF] text-sm">or Browse</span>
							</p>
						</div>

						<div className="grid grid-cols-2 flex-1 gap-5 w-full">
							<div className="flex-1">
								<InputField
									name={'name'}
									//  setChange={}
									title={'Name'}
									val={'val'}
								/>
							</div>
							<div className="flex-1">
								<InputField
									name={'address'}
									//  setChange={}
									title={'Complete Address'}
									val={'val'}
								/>
							</div>
							<div className="flex-1">
								<InputField
									name={'name'}
									//  setChange={}
									title={'Name'}
									val={'val'}
								/>
							</div>
							<div className="flex-1">
								<InputField
									name={'address'}
									//  setChange={}
									title={'Complete Address'}
									val={'val'}
								/>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-5 w-full mt-5">
						<div className="flex-1">
							<InputField
								name={'name'}
								//  setChange={}
								title={'Name'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'address'}
								//  setChange={}
								title={'Complete Address'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'name'}
								//  setChange={}
								title={'Name'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'address'}
								//  setChange={}
								title={'Complete Address'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'name'}
								//  setChange={}
								title={'Name'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'address'}
								//  setChange={}
								title={'Complete Address'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'name'}
								//  setChange={}
								title={'Name'}
								val={'val'}
							/>
						</div>
						<div className="flex-1">
							<InputField
								name={'address'}
								//  setChange={}
								title={'Complete Address'}
								val={'val'}
							/>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex-0.5">
							<InputField
								name={'address'}
								title={'Complete Address'}
								val={'val'}
							/>
						</div>
						<div className="flex flex-col gap-2 flex-1">
							<div className="flex gap-4 justify-start pl-8  items-center text-xs">
								<p className="">12 Oct 2023 </p>
								<p className="">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
							<div className="flex gap-4 justify-start pl-8  items-center text-xs">
								<p className="">12 Oct 2023 </p>
								<p className="">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>
						<button className="flex flex-0.5 justify-center items-center cursor-pointer  gap-1 py-3 ">
							<img src={comment} alt="add" className="w-6 h-6" />
							<span className="text-[#1B9BEF] text-sm font-bold">
								{'Comments'}
							</span>
						</button>
					</div>
				</div>

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
			</div>
		</>
	);
};

export default Products;
