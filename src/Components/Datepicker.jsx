/** @format */

// import ReactDatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
/**
 * A component that renders a datepicker using react-tailwindcss-datepicker library.
 * @param {Object} props - The props object containing selectedDate and setSelectedDate.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.setSelectedDate - A function to set the selected date.
 * @returns {JSX.Element} - A Datepicker component.
 */

const Datepicker = ({ selectedDate, setSelectedDate, ...props }) => {
  return (
    // <ReactDatePicker
    //   {...props}
    //   className={"[&>div]:p-2 [&>div]:rounded-md"}
    //   onChange={setSelectedDate}
    //   value={selectedDate}
    // />
    <div></div>
  );
};

export default Datepicker;
