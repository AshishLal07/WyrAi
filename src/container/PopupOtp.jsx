/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';

const PopupOtp = ({setPopup, popup, formData}) => {
	const [otp, setOtp] = useState(new Array(4).fill(''));

	const [counter, setCounter] = useState(30);

	useEffect(() => {
		// Timer for the OTP countdown
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

		return () => clearInterval(timer);
	}, [counter]);
	if (counter == 0) {
		setPopup(!popup);
	}
	const handleChange = (element, index) => {
		if (/^\d*$/.test(element.value)) {
			setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

			// Auto-focus to the next input field after filling the current one
			if (element.nextSibling) {
				element.nextSibling.focus();
			}
		}
	};

	const handleResendClick = () => {
		// TODO: Implement resend OTP logic
		setCounter(30); // reset timer to 30 seconds
		console.log('Resend OTP');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// TODO: Implement OTP validation logic
		console.log('Submitted OTP:', otp.join(''));
		const resp = await fetch('http://localhost:3000/verifyOtp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({data: formData, otp}),
		});
		console.log(resp);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-200 absolute top-0 w-full bg-[#00000080] z-10">
			<div className="bg-white p-8 rounded shadow-md text-center">
				<h1 className="text-lg mb-4">Enter OTP</h1>
				<p className="text-gray-500 mb-4">OTP sent to your registered Email</p>
				<form onSubmit={handleSubmit}>
					<div className="flex justify-center space-x-2 mb-4">
						{otp.map((data, index) => (
							<input
								className="w-12 h-12 text-center form-control
                           rounded border border-gray-300"
								type="text"
								name="otp"
								maxLength="1"
								key={index}
								value={data}
								onChange={(e) => handleChange(e.target, index)}
								onFocus={(e) => e.target.select()}
							/>
						))}
					</div>
					<p className="text-blue-500 mb-4">
						{counter.toString().padStart(2, '0')}
					</p>
					<button
						type="submit"
						className="text-white bg-blue-500 px-4 py-2 rounded"
					>
						Verify
					</button>
					<p className="text-gray-500 mt-4">
						{"Didn't receive OTP?"}
						<button
							type="button"
							onClick={handleResendClick}
							disabled={counter > 0}
							className="text-blue-600 hover:underline ml-1"
						>
							Send Again
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default PopupOtp;
