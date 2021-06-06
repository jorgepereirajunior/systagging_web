import styled from 'styled-components'
import { ImgHTMLAttributes } from 'react'

export const Container = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 55px;
  /* background-color: darkblue; */
  background-color: ${props => props.theme.colors.primaryStrong};
`
export const LogoContainer = styled.div`
  padding-right: 5px;
  border-radius: 16px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 35px;
  width: 100px;
  background-color: white;
`

export const Image = styled.img`
  width: 100px;
  height: 50px;
`
export const LoginContainer = styled.div`
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 35px;
  width: 100px;
  background-color: white;
`
export const Text = styled.h6`
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryStrong};
`
