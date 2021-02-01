import {styled} from 'goober';

const ExtLink = styled('a')`
    position: relative;
    padding-bottom: 7.5px;
    text-decoration: none;
    color: var(--foreground);
    transition: all var(--transition);

    &:before {
        content: "";
        position: absolute;
        margin: 5px 0 0;
        bottom: 4px;
        left: 0;
        height: 3.5px;
        width: 100%;
        background-color: var(--light-accent);
    }

    &:hover::after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 0;
        height: 3.5px;
        width: 100%;
        background: linear-gradient(102deg,#4551b5 9.16%,#5643cc 32.02%,#543fd7 64.72%);
    }
`;

export default ExtLink;
