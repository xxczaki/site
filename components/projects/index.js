import React from 'react';
import styled from 'styled-components';

import data from './data.json';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
	gap: 17px;
	padding-top: 2em;
`;

const Element = styled.div`
	box-shadow: #212121 0px 10px 30px -15px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: #212121;
    padding: 2rem 1.75rem;
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}

	a {
		text-decoration: none;
		color: #fff;
	}
`;

const Header = styled.h5`
	font-size: 22px;
    margin: 0px 0px 10px;
`;

const Description = styled.p`
	margin: 0px 0px 15px;
`;

const Tags = styled.ul`
	display: flex;
    align-items: flex-end;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
`;

const Tag = styled.li`
	font-size: 13px;
    color: rgb(136, 146, 176);
    line-height: 1.75;
    margin-right: 15px;
`;

const Projects = () => (
	<>
		<Wrapper>
			{data.map(el => (
				<Element key={el.name}>
					<a href={el.url} target="_blank" rel="noopener noreferrer">
						<header>
							<Header>{el.name}</Header>
							<Description>
								{el.description}
							</Description>
						</header>
						<footer>
							<Tags>
								{el.tags.map(name => (
									<Tag key={name}>{name}</Tag>
								))}
							</Tags>
						</footer>
					</a>
				</Element>
			))}
		</Wrapper>
	</>
);

export default Projects;