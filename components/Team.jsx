import {
	Container,
	Heading,
	Image,
	SimpleGrid,
	Text,
	Center,
	Tabs,
	TabList,
	Tab,
	useColorModeValue,
	TabPanels,
	TabPanel,
	Stack,
} from "@chakra-ui/react";
import { Router } from "next/dist/client/router";

function DepartmentTab({ department }) {
	return (
		<Tab
			color={useColorModeValue("teal.900", "teal.50")}
			_selected={{
				bg: "green.100",
				color: "green.900",
			}}
		>
			{department}
		</Tab>
	);
}

function Member({ name, image }) {
	return (
		<Center
			flexDirection="column"
			py={6}
			onClick={() => window.open("google.com", "_blank")}
		>
			<Image
				borderRadius="50%"
				boxSize="200px"
				objectFit="cover"
				src={image}
				alt={name}
			/>
			<Text pt="3" fontWeight="bold" fontSize="20" textAlign="center">
				{name}
			</Text>
		</Center>
	);
}

export default function Team() {
	return (
		<Container maxW={"6xl"} py="12">
			<Heading textAlign="center">Team that made it all possible</Heading>
			<Text
				pt="10"
				fontWeight="semi-bold"
				fontSize="30"
				textAlign="center"
				textDecoration="underline"
			>
				Cheif Co-ordinators
			</Text>
			<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
				<Member name="Darshil Rathod" image="/members/test.jpg" />
				<Member name="Darshil Rathod" image="/members/test.jpg" />
			</SimpleGrid>

			<Text
				pt="10"
				fontWeight="semi-bold"
				fontSize="30"
				textAlign="center"
				textDecoration="underline"
			>
				Joint Co-ordinators
			</Text>
			<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
				<Member name="Darshil Rathod" image="/members/test.jpg" />
				<Member name="Darshil Rathod" image="/members/test.jpg" />
				<Member name="Darshil Rathod" image="/members/test.jpg" />
			</SimpleGrid>

			<Text
				pt="10"
				fontWeight="semi-bold"
				fontSize="30"
				textAlign="center"
				textDecoration="underline"
			>
				Departments
			</Text>
			<Tabs variant="soft-rounded" colorScheme="teal">
				<TabList display="flex" justifyContent="center" pt="4">
					<DepartmentTab department="Web & Graphics" />
					<DepartmentTab department="Tech" />
					<DepartmentTab department="Non-Tech" />
					<DepartmentTab department="Promotion" />
					<DepartmentTab department="Decoration" />
				</TabList>
				<TabPanels>
					<TabPanel>
						<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<SimpleGrid pt="4" minChildWidth="20rem" columns={[1, 3, 3]}>
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
							<Member name="Darshil Rathod" image="/members/test.jpg" />
						</SimpleGrid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
}
