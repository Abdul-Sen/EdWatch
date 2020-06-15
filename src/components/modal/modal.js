import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const ModalBackground = styled.div`
    background-color: rgba(0,0,0,0.4);
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
`;

const ModalForeground = styled.div`
    max-height: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: 1vh auto;
    padding: 10px 15px 20px 20px;
    border: 1px solid #888;
    width: 80%;
`;

const FaIcon = styled(FontAwesomeIcon)`
    color: #cfcfcf;
    font-size: ${props => props.theme.fontSizes.large};
    align-self: flex-end;
`;

function Modal({ children, closeHandler }) {

    return (
        <ModalBackground >
            <ModalForeground>
                <FaIcon icon={faTimes} onClick={closeHandler} />
                <div>
                    {children}
                </div>
            </ModalForeground>
        </ModalBackground>
    )
}
export default Modal;