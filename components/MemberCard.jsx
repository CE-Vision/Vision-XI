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
	HStack,
	IconButton,
} from "@chakra-ui/react";
import { FiLinkedin, FiGithub, FiLink } from "react-icons/fi";

export default function MemberCard({
	id,
	name,
	team,
	post,
	img,
	linkedin,
	github,
	portfolio,
}) {
	return (
		<Center py={4}>
			<Box
				role="group"
				maxW={"16rem"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"2xl"}
				p={6}
				textAlign={"center"}
			>
				<Avatar
					size={"2xl"}
					boxShadow={"lg"}
					src={`/teams/${team}/${id}.jpg`}
					alt={"Avatar Alt"}
					mb={4}
					pos={"relative"}
					transition="0.3s"
					_groupHover={{ transform: "translateY(-2px)" }}
				/>
				<Heading fontSize={"2xl"} fontFamily={"body"}>
					{name}
				</Heading>
				<Text fontWeight={600} color={"gray.500"} mb={4}>
					{post}
				</Text>
				<HStack spacing="1" justify="center">
					{!!linkedin && (
						<IconButton
							variant="ghost"
							rounded="2xl"
							colorScheme="teal"
							aria-label="Call Sage"
							fontSize="20px"
							icon={<FiLinkedin />}
							onClick={() => window.open(linkedin, "_blank")}
						/>
					)}
					{!!github && (
						<IconButton
							variant="ghost"
							rounded="2xl"
							colorScheme="teal"
							aria-label="Call Sage"
							fontSize="20px"
							icon={<FiGithub />}
							onClick={() => window.open(github, "_blank")}
						/>
					)}
					{!!portfolio && (
						<IconButton
							variant="ghost"
							rounded="2xl"
							colorScheme="teal"
							aria-label="Call Sage"
							fontSize="20px"
							icon={<FiLink />}
							onClick={() => window.open(portfolio, "_blank")}
						/>
					)}
				</HStack>
			</Box>
		</Center>
	);
}
