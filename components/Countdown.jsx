import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Countdown = () => {
	const calculateTimeLeft = () => {
		const difference = +new Date(2021, 11, 4) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: addPrecedingZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
				hours: addPrecedingZero(
					Math.floor((difference / (1000 * 60 * 60)) % 24)
				),
				minutes: addPrecedingZero(Math.floor((difference / 1000 / 60) % 60)),
			};
		}

		return timeLeft;
	};

	function addPrecedingZero(time) {
		// console.log(time);

		let timeS = String(time);

		if (timeS.length <= 1) {
			timeS = "0" + timeS;
		}

		// console.log(timeS);

		return timeS;
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 60000);
	});

	const timerComponents = [];
	Object.keys(timeLeft).forEach((interval, index) => {
		if (!timeLeft[interval]) {
			return;
		}

		// console.log(index);

		if (index === 2) {
			timerComponents.push(<span>{timeLeft[interval]}</span>);
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {": "}
			</span>
		);
	});

	return (
		<>
			<Box py="3">
				{timerComponents.length ? (
					<Box>
						<Heading size="lg">{timerComponents}</Heading>
						<Heading fontSize="10" letterSpacing="1px" color="orange.200">
							DAYS &nbsp; HOURS &nbsp; MINS
						</Heading>
					</Box>
				) : (
					<Heading size="md">Thank you for coming!</Heading>
				)}
			</Box>
		</>
	);
};

export default Countdown;
