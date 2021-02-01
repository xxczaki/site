import {styled} from 'goober';

const Footer = styled('footer')`
	height: 32px;
	margin: var(--gap) auto;
	padding: 0 1.5rem;
	max-width: var(--main-content);
	display: flex;
	align-items: center;
	justify-content: space-between;
    color: var(--text);
    font-size: 0.85em;
    opacity: 0.5;
	padding-top: var(--small-gap);
`;

export default Footer;
