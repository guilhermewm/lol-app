import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background: linear-gradient(180deg, #2a3267, #1e282f 100%);
`;

export const ChampionList = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;  
  @media screen and (min-width: 980px) {
    padding: 8rem 1.5rem;
  }
`
  
export const Main = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	width: 100%;
	background-color: #1e282f; 
`