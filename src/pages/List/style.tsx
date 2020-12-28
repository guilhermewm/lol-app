import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 10px;
  width: 25%;
  min-width: 350px;
`;


export const Body = styled.div`
  padding: 20px;
  margin: 5px;
  background: white;
  height: 100%;
  margin-top: -30px;
`;


export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const Description = styled.div`
  margin-top: 27px;
  margin-bottom: 27px;
  line-height: 1.5;
  font-size: 16px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

