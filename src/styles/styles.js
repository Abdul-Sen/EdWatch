import styled from 'styled-components';

export const ThemeButton = styled.button`
    background-color: ${props => props.theme.colors.iconColor.primary};
    border-radius: ${props => props.round? "50%" : "4px"};
    padding: 0.8rem;
    border: none;
    outline: none;
    &:active {
        background-color: ${props => props.theme.colors.iconColor.activePrimary};
    }
`;

export const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  margin: 7px;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;

  transition: all .2s ease-in-out;
  &:hover{
    cursor: pointer;
    transform: scale(1.5);
  }
`;