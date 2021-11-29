import {
	Box,
	chakra,
	Container,
	Heading,
	Icon,
	Link,
	Stack,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Logo from "./Logo";

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Heading size="sm">
					Made with{" "}
					<Icon>
						<AiFillHeart color="red" size="md" />
					</Icon>{" "}
					by the <Link color="teal">team</Link>.
				</Heading>
				<Stack direction={"row"} spacing={6}>
					{/* <SocialButton label={"Twitter"} href={"#"}>
						<FaTwitter />
					</SocialButton> */}
					{/* <SocialButton label={"YouTube"} href={"#"}>
						<FaYoutube />
					</SocialButton> */}
					<SocialButton
						label={"Instagram"}
						href={"https://www.instagram.com/cevision_xi/"}
					>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};
