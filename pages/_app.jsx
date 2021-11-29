import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { createContext, useState } from "react";

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
	const [team_tab, setTeamTab] = useState(1);
	return (
		<AppContext.Provider value={{ team_tab, setTeamTab }}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</AppContext.Provider>
	);
}

export default MyApp;
