import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  width: 100%;
`

export const AreaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 180px;
  width: 100%;

  background-color: none;
`

export const BoxButton = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 180px;
  width: 200px;

  background-color: none;
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${props => props.theme.colors.light};
`

export const ImageContainer = styled.div`
  height: 137px;
  width: 187px;
`
export const Greeting = styled.div`
  margin: 20px 0;
  padding-left: 25px;
  display: flex;
  
  width: 100%;

  font-size: 28px;
  font-weight: bold;
`
