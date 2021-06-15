import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 200px;

  background-color: ${props => props.theme.colors.primaryStrong};
  cursor: pointer;

  transition: opacity 300ms;

  :hover {
    opacity: 0.85;

  }
`

export const Label = styled.h3`
  font-size: 14px;
  color: ${props => props.theme.colors.light};

`
