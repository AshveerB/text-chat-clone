import React from 'react';
import { FaCode } from 'react-icons/fa';

function LandingPage() {
	return (
		<>
			<div className='app'>
				<FaCode style={{ fontSize: '4rem' }} />
				<br />
				<a href='/chat' style={{ fontSize: '2rem' }}>Navigate to chat room</a>
			</div>
		</>
	);
}

export default LandingPage;
