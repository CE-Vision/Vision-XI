import Image from "next/image";
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Button,
	ModalFooter,
	Flex,
	Tag,
	IconButton,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function EventCard({
	id,
	img,
	title,
	tagline,
	category,
	rounds,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleGetColor = () => {
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
		<>
			<Center py={6} onClick={onOpen}>
				<Box
					maxW="25rem"
					minH="24rem"
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
						<Image
							src={`/events/${id}.webp`}
							layout="fill"
							objectFit="cover"
							alt=""
						/>
					</Box>
					<Stack>
						<Text
							color={`${handleGetColor()}.500`}
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
							{title}
						</Heading>
						<Text color={"gray.500"} noOfLines={2}>
							{tagline}
						</Text>
					</Stack>
				</Box>
			</Center>
			<Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="lg" cursor="pointer">
						{title}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{rounds?.map((round) => (
							<Stack key={round.id} my="4">
								<Flex justify="space-between" align="center">
									<Heading size="sm" color="teal.400">
										{category != "workshop" && `#${round.id}`} {round.title}
									</Heading>
									{!!round.duration && <Tag size="sm">{round.duration}</Tag>}
								</Flex>
								<Text>
									{category == "workshop"
										? round.description.split("•").map(
												(line, key) =>
													key !== 0 && (
														<>
															•&nbsp;{line}
															<br />
														</>
													)
										  )
										: round.description}
								</Text>
							</Stack>
						))}
					</ModalBody>
					<ModalFooter>
						<Button
							ml={3}
							leftIcon={<AiOutlineWhatsApp />}
							colorScheme="teal"
							variant="solid"
							onClick={() =>
								window.open(
									"https://api.whatsapp.com/send?phone=+916353798783",
									"_blank"
								)
							}
						>
							Participate
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
