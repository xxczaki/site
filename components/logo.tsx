import Image from 'next/image';
import {styled} from 'goober';

const Logo = styled(Image)`
    cursor: pointer;
    transition: background-color var(--transition);
    display: inline-flex;
	padding: .5rem !important;
	margin: -10px;
	border-radius: var(--inline-radius);
	margin-right: var(--gap-half);
	color: var(--text);

    &:hover {
        background-color: var(--hover);
    }
`;

export default Logo;
