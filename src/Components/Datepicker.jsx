/** @format */

import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import '../datepicker-tailwind.css';
// import "react-calendar/dist/Calendar.css";
/**
 * A component that renders a datepicker using react-tailwindcss-datepicker library.
 * @param {Object} props - The props object containing selectedDate and setSelectedDate.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.setSelectedDate - A function to set the selected date.
 * @returns {JSX.Element} - A Datepicker component.
 */

const Datepicker = ({selectedDate, setSelectedDate, className, ...props}) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleDatePicker = () => {
		setIsOpen(!isOpen);
	};

	// const [dateRange, setDateRange] = useState([null, null]);
	// const [startDate, endDate] = dateRange;

	// const setDate = (dates) => {
	// 	const [start, end] = dates;
	// 	// Check if both start and end dates are selected and they are not the same
	// 	console.log(start, end);
	// 	if (start && end) {
	// 		// If start and end are the same, it's considered as a single day selection
	// 		// and we can either set both to null or keep it as a valid single day selection
	// 		if (start.toISOString() === end.toISOString()) {
	// 			setDateRange([start, null]); // Keeps the start date, removes the end date
	// 		} else {
	// 			setDateRange([start, end]);
	// 		}
	// 	} else {
	// 		// If we're in the process of selecting the range, update as usual
	// 		setDateRange([start, end]);
	// 	}
	// };

	return (
		<>
			<DatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				minDate={new Date()}
				className={className || ''}
				onClickOutside={toggleDatePicker}
			></DatePicker>
		</>
	);
};

export default Datepicker;

{
	/* <div className=" ">
				<input
					type="text"
					value={selectedDate}
					onChange={() => {}}
					onClick={toggleDatePicker} // Change to onClick instead of onFocus
					className="border px-4 py-2 w-64"
				/>
				{isOpen && (
					<DatePicker
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						onClickOutside={toggleDatePicker} // Close date picker when clicking outside
						className="absolute bg-white shadow-md mt-2"
					/>
				)}
			</div> */
}
