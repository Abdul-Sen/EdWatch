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