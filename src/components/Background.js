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
import macysp from '../assets/macys_parade.png';
import sponge from '../assets/YellowSpongey.jpg';
import nature from '../assets/NaturesGiftExhibit.jpg';
import Nav from 'react-bootstrap/Nav';

const content = [
	{
		title: `LITTLE CLOUD IN MACY'S THANKSGIVING DAY PARADE!`,
		description:
		`It happened! Little Cloud made it all the way to New York for the Macy's Thanksgiving Day Parade!`,
		button: 'Read More',
		image: macysp,
		link:'/macy'
	},
	{
		title: `PLAYWORKS: THE GOLDEN AGE AT ARSHAM/FIEG GALLERY`,
		description:
		'This series of works play with the discovery and abstraction of the figure, using the texturally soft and informal medium of plastiline. We depict our cartoon heroes, pop culture icons, mass media, and memes that affect us daily.',
		button: 'Discover',
		image: sponge,
		link:'/PLAY'
	},
	{
		title: `NATURE'S GIFT`,
		description:
		`We're so excited to announce our museum exhibition, Nature’s Gift: Humans, Friends & The Unknown, an immersive experience featuring a large-scale commissioned work at the Oakland Museum of California.`,
		button: 'Buy now',
		image: nature,
		link:'/nature'
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