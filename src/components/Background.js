import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import cloud2 from '../assets/SITW19_AryaCollective_2.jpg';
import moncler1 from '../assets/moncler.jpg';
import santa4 from '../assets/Santa_Nightlife46.jpg';
import Nav from 'react-bootstrap/Nav';

const monty = <div>FRIENDSWITHYOU<br />X< br />MONCLER</div>
const sitw = <div>FRIENDSWITHYOU<br />X< br />SOMETHING IN THE WATER FESTIVAL</div>

const content = [
	{
		title: sitw,
		description:
		`We were so honored and happy to have made a giant inflatable installation for Pharrell and his new festival Something in the Water!`,
		button: 'READ MORE',
		image: cloud2,
		link:'#/water'
	},
	{
		title: monty,
		description:
		`To inaugurate the opening of their new flagship store in the Ginza district in Tokyo, Moncler has created a collection in collaboration with FriendsWithYou.`,
		button: 'Read More',
		image: moncler1,
		link:'#/moncler'
	},
	{
		title: `SANTA MONICA LIGHT WAVE`,
		description:
		'This larger-than-life public installation seeks to immerse concert-goers in a communal gathering, complimented by a glow of color, energy and sound, casting a powerful yet delicate ripple.',
		button: 'Discover',
		image: santa4,
		link:'#/light'
	}
];



const Background= () => (
	<div>

		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`, }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<Nav.Item>
    <Nav.Link href={item.link}>	<button>{item.button}</button></Nav.Link></Nav.Item>
					</div>
				
				</div>
			))}
		</Slider>
	</div>
);

render(<Background />, document.getElementById('root'));

 
export default Background;