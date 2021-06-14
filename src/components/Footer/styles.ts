import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 28px;
  background-color: ${props => props.theme.colors.primaryStrong};

  font-size: 14px;
  color: ${props => props.theme.colors.light};
`
