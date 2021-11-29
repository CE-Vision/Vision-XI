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
	Icon,
	Image,
	Heading,
	HStack,
	VStack,
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
					<Box>
						{/* <Image
							src="/favicon.ico"
							alt="Vision XI"
							height="35"
							fill="teal.400"
							// opacity={0.5}
							blendMode="exclusion"
						/> */}
						<svg
							width="44"
							height="42"
							viewBox="0 0 44 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.97766 4.89739C1.11841 3.40291 2.19719 1.5383 3.92107 1.5383V1.5383C4.71563 1.5383 5.45082 1.95889 5.85353 2.64384L16.8696 21.3802C17.2968 22.1067 17.3016 23.0066 16.8823 23.7377V23.7377C15.9809 25.3094 13.7142 25.3106 12.8111 23.7399L1.97766 4.89739Z"
								fill="#718096"
							/>
							<path
								d="M27.3492 5.75712C27.9739 4.67525 27.6032 3.29186 26.5213 2.66724V2.66724C25.4408 2.04343 24.0593 2.41226 23.4335 3.4916L12.9207 21.6238C12.5063 22.3385 12.5107 23.2214 12.9323 23.9319V23.9319C13.8221 25.4317 15.9976 25.4188 16.8695 23.9085L27.3492 5.75712Z"
								fill="#718096"
							/>
							<path
								d="M37.7401 6.44031C38.9882 6.44031 40 5.42852 40 4.18042V4.18042C40 2.93232 38.9882 1.92053 37.7401 1.92053L26.2147 1.92053C24.9666 1.92053 23.9548 2.93232 23.9548 4.18042V4.18042C23.9548 5.42852 24.9666 6.44031 26.2147 6.44031L37.7401 6.44031Z"
								fill="#718096"
							/>
							<g filter="url(#filter0_d_757_762)">
								<path
									d="M35.4805 10.5081C35.4805 9.25996 36.4923 8.24817 37.7404 8.24817V8.24817C38.9885 8.24817 40.0002 9.25996 40.0002 10.5081V24.9713C40.0002 26.2194 38.9885 27.2312 37.7404 27.2312V27.2312C36.4923 27.2312 35.4805 26.2194 35.4805 24.9713V10.5081Z"
									fill="#38B2AC"
								/>
							</g>
							<g filter="url(#filter1_d_757_762)">
								<path
									d="M15.8835 5.03606C14.9554 3.45789 16.0933 1.46857 17.9241 1.46857V1.46857C18.7649 1.46857 19.5426 1.91448 19.9673 2.64009L32.2873 23.6891C33.2011 25.2503 32.0751 27.2139 30.2662 27.2139V27.2139C29.4363 27.2139 28.6683 26.7746 28.2476 26.0592L15.8835 5.03606Z"
									fill="#F6AD55"
								/>
							</g>
							<g filter="url(#filter2_d_757_762)">
								<path
									d="M33.2408 11.9197C34.1851 10.2893 33.0086 8.24829 31.1244 8.24829V8.24829C30.2506 8.24829 29.4432 8.71444 29.0064 9.47115L17.3597 29.6437C16.887 30.4626 16.9321 31.4813 17.4756 32.2551V32.2551C18.4954 33.7073 20.6774 33.612 21.5667 32.0764L33.2408 11.9197Z"
									fill="#38B2AC"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_757_762"
									x="31.4805"
									y="8.24817"
									width="12.5198"
									height="26.983"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_757_762"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_757_762"
										result="shape"
									/>
								</filter>
								<filter
									id="filter1_d_757_762"
									x="11.5532"
									y="1.46857"
									width="25.0583"
									height="33.7453"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_757_762"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_757_762"
										result="shape"
									/>
								</filter>
								<filter
									id="filter2_d_757_762"
									x="13.0342"
									y="8.24829"
									width="24.5396"
									height="33.0402"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_757_762"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_757_762"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</Box>
					<VStack>
						<Heading
							fontSize="10"
							letterSpacing="1px"
							color="orange.200"
							lineHeight={0}
						>
							MARK THE DATE
						</Heading>
						<Heading size="md" lineHeight="16px">
							DEC 4, 2021
						</Heading>
					</VStack>
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
