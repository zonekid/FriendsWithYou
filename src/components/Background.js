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

import cloud from '../assets/sitw_hov_p.jpg';
import sponge from '../assets/Optimized-yellowspongey.jpg';
import nature from '../assets/naturesgiftexhibit.jpg';
import Nav from 'react-bootstrap/Nav';

const content = [
	{
		title: `FRIENDSWITHYOU + PHARRELL AT SOMETHING IN THE WATER FESTIVAL`,
		description:
		`We were so honored and happy to have made a giant inflatable installation for Pharrell and his new festival Something in the Water!`,
		button: 'READ MORE',
		image: cloud,
		link:'#/water'
	},
	{
		title: `PLAYWORKS: THE GOLDEN AGE`,
		description:
		'This series of works play with the discovery and abstraction of the figure, using the texturally soft and informal medium of plastiline. We depict our cartoon heroes, pop culture icons, mass media, and memes that affect us daily.',
		button: 'Discover',
		image: sponge,
		link:'#/play'
	},
	{
		title: `NATURE'S GIFT`,
		description:
		`We're so excited to announce our museum exhibition, Nature’s Gift: Humans, Friends & The Unknown, an immersive experience featuring a large-scale commissioned work at the Oakland Museum of California.`,
		button: 'Read More',
		image: nature,
		link:'#/nature'
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