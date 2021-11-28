import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import EventCard from "../components/EventCard";
import Team from "../components/Team";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Contact />
            <Box bg={useColorModeValue("teal.100", "teal.700")}>
                <Container maxW={"6xl"} py="8">
                    <Heading size="xl" color={useColorModeValue("teal.800,teal.50")}>
                        Events
                    </Heading>
                    <Text color={useColorModeValue("teal.700,teal.100")}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vero.
                    </Text>
                    <Divider my="2" />

                    <Tabs variant="soft-rounded" colorScheme="teal">
                        <TabList>
                            <Tab color={useColorModeValue("teal.900", "teal.50")}>All</Tab>
                            <Tab
                                color={useColorModeValue("teal.900", "teal.50")}
                                _selected={{
                                    bg: "blue.100",
                                    color: "blue.900",
                                }}
                            >
                                Tech
                            </Tab>
                            <Tab
                                color={useColorModeValue("teal.900", "teal.50")}
                                _selected={{
                                    bg: "green.100",
                                    color: "green.900",
                                }}
                            >
                                Non-Tech
                            </Tab>
                            <Tab
                                color={useColorModeValue("teal.900", "teal.50")}
                                _selected={{
                                    bg: "yellow.100",
                                    color: "yellow.900",
                                }}
                            >
                                Workshops
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SimpleGrid minChildWidth="20rem" spacing="2rem" columns={[1, null, 3, 3]}>
                                    <EventCard
                                        title="Some Event"
                                        category="TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="workshop"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid minChildWidth="20rem" spacing="2rem" columns={[1, null, 3, 3]}>
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid minChildWidth="20rem" spacing="2rem" columns={[1, null, 3, 3]}>
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid minChildWidth="20rem" spacing="2rem" columns={[1, null, 3, 3]}>
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                    <EventCard
                                        title="Some Event"
                                        category="NON-TECH"
                                        tagline="taaaag line fasdkj"
                                        img="https://picsum.photos/200"
                                    />
                                </SimpleGrid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
            <Team />
        </>
    );
}
