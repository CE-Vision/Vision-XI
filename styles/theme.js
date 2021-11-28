import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				scrollBehavior: "smooth",
				scrollPadding: "3.9rem",
			},
		},
	},
	fonts: {
		heading: "Montserrat",
		body: "Source Sans Pro",
	},
});

export default theme;
