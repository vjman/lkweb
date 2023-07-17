"use client";

import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';


const Funny = () => {
	const handleConfetti = () => {
	  confetti();
	};
  
	return (
	  <Button
		auto
		rounded
		ripple={false}
		size="md"
		onPress={handleConfetti}
		css={{
		  background: '$white',
		  fontWeight: '$semibold',
		  boxShadow: '$md',
		  position: 'relative',
		  overflow: 'visible',
		  color: '#0F9549',
		  px: '$28',
		  '&:after': {
			content: '""',
			position: 'absolute',
			width: '100%',
			height: '100%',
			background: '$white',
			opacity: 1,
			borderRadius: '$pill',
			transition: 'all 0.4s ease'
		  },
		  '&:hover': {
			transform: 'translateY(-5px)',
			'&:after': {
			  transform: 'scaleX(1.5) scaleY(1.6)',
			  opacity: 0
			}
		  },
		  '&:active': {
			transform: 'translateY(-2px)'
		  }
		}}
	  >
		快点我
	  </Button>
	);
  };

  export default Funny;