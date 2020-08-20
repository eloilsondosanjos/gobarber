import styled, { css } from 'styled-components';
import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #C53030;
  `}

  ${props => props.isFocused && css`
    color: #FF9000;
    border-color: #FF9000;
  `}

  ${props => props.isFilled && css`
    color: #FF9000;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;
    border-radius: 0;

    &::placeholder {
      color: #666360;
    }

    /* Cor do texto e de fundo do autocomplete respectivamente */
    &:-webkit-autofill {
      -webkit-text-fill-color: #F4EDE8 !important;
      box-shadow: 0 0 0 30px #232129 inset;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0px;
  }

  span {
    background-color: #C53030;

    &::before {
    border-color: #C53030 transparent;
    }
  }
`;
