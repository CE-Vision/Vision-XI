import Image from "next/image";
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";

export default function EventCard({ img, title, tagline, category }) {
	const getColor = () => {
		switch (category.toLowerCase()) {
			case "tech":
				return "blue";
			case "non-tech":
				return "green";
			case "workshop":
				return "yellow";

			default:
				break;
		}
	};

	return (
		<Center py={6}>
			<Box
				maxW="25rem"
				w="full"
				bg={useColorModeValue("white", "gray.900")}
				boxShadow="xl"
				rounded="md"
				p={6}
				overflow="hidden"
			>
				<Box
					h={"210px"}
					bg={"gray.100"}
					mt={-6}
					mx={-6}
					mb={6}
					pos={"relative"}
				>
					<Image src={img} layout="fill" alt="" />
				</Box>
				<Stack>
					<Text
						color={`${getColor()}.500`}
						textTransform={"uppercase"}
						fontWeight={800}
						fontSize={"sm"}
						letterSpacing={1.1}
					>
						{category}
					</Text>
					<Heading
						color={useColorModeValue("gray.700", "white")}
						fontSize={"2xl"}
						fontFamily={"body"}
					>
						Boost your conversion rate
					</Heading>
					<Text color={"gray.500"}>{tagline}</Text>
				</Stack>
			</Box>
		</Center>
	);
}
