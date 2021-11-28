import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";

export default function MemberCard() {
	return (
		<Box width="100" height="100" backgroundImage="/members/test.jpg">
			<Stack>
				<Heading>Vraj Shah</Heading>
				<Text size="md">Co-Head</Text>
			</Stack>
		</Box>
	);
}
