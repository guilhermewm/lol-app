import React from 'react';
import List from 'pages/List/Index';
import './style.tsx';
import { Main, StyledContainer, ChampionList } from './style';

const champions = [
	{
	  title: 'Aatrox',
	  description:
		'fasfasfasfasf',
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
	},
	{
	  title: 'Ahri',
	  description:
		'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
	},
	{
	  title: 'Alistar',
	  description:
		"Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
	},
	{
	  title: 'Annie',
	  description:
		'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
	},
	{
	  title: 'Yasuo',
	  description:
		'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
	},
	{
	  title: 'Rakan',
	  description:
		"Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
	  image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg',
	}
	];


const Home: React.FC = () => {
	return (
		<>
			<Main>
				{/* <Particles> */}
					<StyledContainer>
						<ChampionList>							
							<List champions={champions} />
						</ChampionList>
					</StyledContainer>
				{/* </Particles> */}
			</Main>					
		</>
	)
}

export default Home;
