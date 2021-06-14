/**
 * Dependencies
 */
import React, { FC } from 'react'

/**
 * Styled-components
 */
import {
  Container,
  LogoContainer,
  Image,
  LoginContainer,
  Text
} from './styles'

import logotipo from '../../assets/logo_systagging.png'

export const Header: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={logotipo} />
      </LogoContainer>

      <LoginContainer>
        <Text>LOGIN</Text>
      </LoginContainer>
    </Container>
  )
}
