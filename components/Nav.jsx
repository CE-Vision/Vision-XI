import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	// const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				bg={useColorModeValue("white", "gray.800")}
				px={4}
				position="sticky"
				top="0"
				zIndex="100"
			>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box>Vision XI</Box>
					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode} borderRadius="1rem">
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
