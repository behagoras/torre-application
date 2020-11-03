import { css } from 'styled-components'

export const resetButton = css`
  appearance: button;
  color: -internal-light-dark(black, white);
  text-align: left;
  background-color: transparent;
  font: 400 1rem ${(props) => props.theme.fonts.main};
  padding: 0;
  border-color: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  &:focus {
    border:none;
  }
`

export default {}
