import react, { useState } from 'react';

import Layout from '../../components/layout';
import Button from '../../components/button';
import { Container, PingContainer } from './styles';
import api from '../../services/api';

const Ping = () => {

	const [error, setError] = useState(null);
	const [ping, setPing] = useState(null)
	
	const sendPing = async () => {
		try {
			const response = await api.get('/ping');
			console.log(response);
			setPing(response.data);
		}	catch (e){
			console.log(e);
			setError(e);
		}
	};

	return (
		<Layout>
			<Container>
				{
					error != null || ping != null ? (
						<PingContainer error={error!=null}>
							{JSON.stringify(ping || error)}
						</PingContainer>
					) : (
								<Button name={'pong!'} onAction={sendPing}/> 
					)
				}
			</Container>
		</Layout>
		
	)
}

export default Ping