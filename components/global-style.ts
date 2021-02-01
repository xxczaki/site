import {createGlobalStyles} from 'goober/global';

const GlobalStyle = createGlobalStyles`
	:root {
		--gap-half: 0.5rem;
		--gap: 1rem;
		--gap-double: 2rem;
		--small-gap: 4rem;
		--main-content: 55rem;
		--radius: 8px;
		--inline-radius: 5px;
		--background: #1c1d1f;
		--text: #fff;
		--accent: #222;
		--light-accent: #666;
		--hover: #2b2d30;
		--selection: hsl(0deg 0% 100% / 99%);
		--header: #1c1d1fab;
		--header-border: rgba(255, 255, 255, 0.5);
		--font-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--transition: 0.1s ease-in-out;
		--transition-slow: 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	}

	body {
		align-items: center;
		justify-content: center;
		font-family: var(--font-sans);
		background-color: var(--background);
		color: var(--text);
		font-size: 1.125rem;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
		overflow-x: hidden;
		margin: 0;
		padding: 0;
	}

	::selection {
		text-shadow: none;
		background: var(--selection);
		color: var(--background);
	}
`;

export default GlobalStyle;
