import React, { FC, ReactNode } from 'react'

import { Container, Label } from './styles'

interface ButtonProps {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <Container >
      <Label>{children}</Label>
    </Container>
  )
}
