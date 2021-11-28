import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				scrollBehavior: "smooth",
				scrollPadding: "3.9rem",
			},
			"&::-webkit-scrollbar": {
				width: "1",
				borderRadius: "8px",
				backgroundColor: `rgba(0, 0, 0, 0.05)`,
			},
			"&::-webkit-scrollbar-thumb": {
				borderRadius: "5",
				backgroundColor: "teal",
			},
		},
	},
	fonts: {
		heading: "Montserrat",
		body: "Source Sans Pro",
	},
});

export default theme;
