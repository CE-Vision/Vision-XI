import {
	Box,
	Container,
	Divider,
	Heading,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Head from "next/head";
import MemberCard from "../components/MemberCard";
import events from "../events.json";
import teams from "../teams.json";
import { useContext } from "react";
import { AppContext } from "./_app";

export default function Home() {
	const { team_tab, setTeamTab } = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Vision XI | SVIT Vasad</title>
			</Head>
			<Nav />
			<Hero />
			<Contact />
			<Box bg={useColorModeValue("teal.100", "teal.500")}>
				<Container maxW={"6xl"} py="12">
					<Heading size="xl" color={useColorModeValue("teal.800,teal.50")}>
						What is Vision?
					</Heading>
					<Text color={useColorModeValue("teal.700,teal.100")}>
						Vision, the most awaited tech fest for SVIT students is back, better
						and stronger with VISION XI. The Computer Department has the
						reputation of providing the best symposium experience since 10 years
						and this year is no different. So make sure you register for our
						amazing events and make the best out of your VISION experience!
					</Text>
				</Container>
			</Box>
			<Box id="events">
				<Container maxW={"6xl"} py="12">
					<Heading size="xl" color={useColorModeValue("teal.800,teal.50")}>
						Events
					</Heading>

					<Text color={useColorModeValue("teal.700,teal.100")}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, vero.
					</Text>

					<Tabs variant="soft-rounded" colorScheme="teal">
						<TabList my="4" flexWrap="wrap">
							<Tab
								color={useColorModeValue("teal.900", "teal.50")}
								me="2"
								mb="2"
							>
								All
							</Tab>
							<Tab
								color={useColorModeValue("teal.900", "teal.50")}
								_selected={{
									bg: "blue.100",
									color: "blue.900",
								}}
								me="2"
								mb="2"
							>
								Tech
							</Tab>
							<Tab
								color={useColorModeValue("teal.900", "teal.50")}
								_selected={{
									bg: "green.100",
									color: "green.900",
								}}
								me="2"
								mb="2"
							>
								Non-Tech
							</Tab>
							<Tab
								color={useColorModeValue("teal.900", "teal.50")}
								_selected={{
									bg: "yellow.100",
									color: "yellow.900",
								}}
								me="2"
								mb="2"
							>
								Workshops
							</Tab>
						</TabList>

						<TabPanels>
							<TabPanel p="0">
								<SimpleGrid
									minChildWidth={[250, null, 320, 320]}
									spacing="2rem"
									columns={[1, null, 3, 3]}
								>
									{events.map((event) => {
										return <EventCard key={event.id} {...event} />;
									})}
								</SimpleGrid>
							</TabPanel>
							<TabPanel p="0">
								<SimpleGrid
									minChildWidth={[250, null, 320, 320]}
									spacing="2rem"
									columns={[1, null, 3, 3]}
								>
									{events.map((event) => {
										if (event.category.toLowerCase() == "tech")
											return <EventCard key={event.id} {...event} />;
									})}
								</SimpleGrid>
							</TabPanel>
							<TabPanel p="0">
								<SimpleGrid
									minChildWidth={[250, null, 320, 320]}
									spacing="2rem"
									columns={[1, null, 3, 3]}
								>
									{events.map((event) => {
										if (event.category.toLowerCase() == "non-tech")
											return <EventCard key={event.id} {...event} />;
									})}
								</SimpleGrid>
							</TabPanel>
							<TabPanel p="0">
								<SimpleGrid
									minChildWidth={[250, null, 320, 320]}
									spacing="2rem"
									columns={[1, null, 3, 3]}
								>
									{events.map((event) => {
										if (event.category.toLowerCase() == "workshop")
											return <EventCard key={event.id} {...event} />;
									})}
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Container>
			</Box>
			<Box bg={useColorModeValue("gray.100", "gray.700")}>
				<Container maxW={"6xl"} py="12">
					<Heading
						size="xl"
						mb="3"
						color={useColorModeValue("teal.800,teal.50")}
					>
						Team that made it all possible
					</Heading>
					<Text color={useColorModeValue("teal.700,teal.100")}>
						We know you don&apos;t read so why waste time in copywriting.
					</Text>
					<Tabs
						index={team_tab}
						onChange={setTeamTab}
						variant="soft-rounded"
						colorScheme="teal"
					>
						<TabList my="4" flexWrap="wrap">
							{Object.keys(teams).map((team, key) => (
								<Tab
									key={key}
									color={useColorModeValue("teal.900", "teal.50")}
									me="2"
									mb="2"
								>
									{team}
								</Tab>
							))}
						</TabList>
						<TabPanels>
							{Object.entries(teams).map((team, key) => (
								<TabPanel p="0" key={key}>
									<SimpleGrid
										minChildWidth={[250, null, 320, 320]}
										spacing="2rem"
										columns={[1, null, 3, 3]}
									>
										{team[1].map((member) => (
											<MemberCard key={member.id} team={team[0]} {...member} />
										))}
									</SimpleGrid>
								</TabPanel>
							))}
						</TabPanels>
					</Tabs>
				</Container>
			</Box>
			{/* <Team /> */}

			<Footer />
		</>
	);
}
