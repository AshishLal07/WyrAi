/* eslint-disable react/prop-types */
import InputField from './InputField';

const DetailsField = ({name, title, val}) => {
	return (
		<>
			<div className=" flex flex-col gap-8">
				<span className="font-bold text-xl">{name}</span>
				<div className="flex gap-5">
					<div className="flex-1 h-5">
						<InputField
							name={'name'}
							//  setChange={}
							title={'Name'}
							val={val}
						/>
					</div>
					<div className="flex-1">
						<InputField
							name={'address'}
							//  setChange={}
							title={'Complete Address'}
							val={val}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailsField;
