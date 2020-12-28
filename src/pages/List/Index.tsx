import React from 'react';
import Card from 'components/Card';
import { Body, Column, Container, Description, Row, Title } from './style';


const List: React.FC<any> = ({
	champions
}) => {
	return (
		<>			
			<Container>
				<Row>
					{champions.map((champion: any) => (
						<Column>
							<Card>
								<img style={{ width: '100%' }} src={champion.image} />
								<Body>
									<Title>{champion.title}</Title>
									<Description className="card-body">{champion.description}</Description>
								</Body>								
							</Card>
						</Column>
					))}								
				</Row>
			</Container>
		</>
	)
}

export default List;
