import React, { FC } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import clientsImg from '../../assets/client_group.png'

import {
  Container,
  Main,
  AreaButtons,
  ImageContainer,
  BoxButton,
  Greeting
} from './styles'

export const Home: FC = () => {
  return (
    <Container>
      <Header />

      <Main>
        <Greeting >Bem Vindo!</Greeting>
        <AreaButtons>
          <BoxButton>
            <ImageContainer>
              <img
                src={clientsImg}
                alt="Lista de Clientes"
              />
            </ImageContainer>
            <Button>
              Lista de Clientes
            </Button>
          </BoxButton>

        </AreaButtons>
      </Main>

      <Footer />
    </Container>
  )
}
