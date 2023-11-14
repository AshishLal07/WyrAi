/* eslint-disable react/prop-types */
import {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import moment from 'moment/moment';
import {PiPaperPlaneRightFill} from 'react-icons/pi';
import {MdModeEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {RxCrossCircled} from 'react-icons/rx';

const CommentBox = ({setTogglePopup, move}) => {
	const [commentsData, setCommentsData] = useState([
		// Initially, the comments data
		{
			id: 1,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		},
		{id: 2, text: 'Another example comment text'},
	]);
	const [comments, setComments] = useState([]); // this will store new Comment to send backend

	const initialValues = {comment: '', editingId: null};

	const date = moment().format('Do MMM YYYY');

	const validationSchema = Yup.object().shape({
		comment: Yup.string().required('comment is required'),
	});

	const formik = useFormik({
		initialValues,
		onSubmit: (values) => handleSubmit(values),
		validationSchema,
	});

	async function handleSubmit(values) {
		try {
			if (values.editingId) {
				//this is for editing comments
				const updatedComments = commentsData.map((comment) =>
					comment.id === values.editingId
						? {...comment, text: values.comment}
						: comment
				);
				setCommentsData(updatedComments);
				values.editingId = null;
			} else {
				setComments([...comments, values.comment]);
			}
			console.log(comments, commentsData);
		} catch (error) {
			console.error(error);
		}
	}

	// remove
	const removeComment = (commentId) => {
		setCommentsData(commentsData.filter((comment) => comment.id !== commentId));
	};

	//edit
	const editComment = (id, text) => {
		formik.setFieldValue('comment', text);
		formik.setFieldValue('editingId', id);
	};

	return (
		<>
			<div
				ref={move}
				className="flex flex-col items-center justify-center h-full  absolute top-0 left-0 w-full bg-[#00000080] z-10 "
			>
				<div className=" w-full md:w-[70vh] p-5 bg-white border rounded-lg">
					<h1 className="text-xl text-center mb-8 font-bold"> Comments</h1>
					<div className="relative">
						<InputField
							label={'Add Comments'}
							name={'comment'}
							type="text"
							value={formik.values.comment}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.comment && formik.errors.comment}
							placeholder={'Enter Comment'}
							labelColor={'bg-white'}
						/>
						<PiPaperPlaneRightFill
							className="text-blue text-3xl absolute md:top-[1.5vh] md:right-[1vh] cursor-pointer"
							onClick={() => handleSubmit(formik.values)}
						/>
						<RxCrossCircled
							className=" text-3xl absolute md:top-[-9.5vh] md:right-[-1vh] cursor-pointer"
							onClick={() => setTogglePopup(false)}
						/>
						<div className="py-2 px-4 text-xs">{date}</div>
						<div>
							<ul className="w-full overflow-auto">
								{commentsData.length > 0 &&
									commentsData.map((comment) => (
										<li
											key={comment.id}
											className="flex items-center justify-between px-4 py-2 mb-2 border-b"
										>
											<span className="text-sm flex-grow text-lightGray">
												{comment.text}
											</span>
											<div className="flex gap-5 ">
												<MdModeEdit
													className="text-xl text-black cursor-pointer"
													onClick={() => editComment(comment.id, comment.text)}
												/>
												<AiFillDelete
													className="text-2xl text-red-500 cursor-pointer"
													onClick={() => removeComment(comment.id)}
												/>
											</div>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CommentBox;
