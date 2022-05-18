import styled from "@emotion/styled";
import React from "react";
import Modal from "react-modal";
import { ConfirmButton, SecondaryButton, ButtonGroup } from "./Buttons";

const ModalStyled = styled(Modal)`
  width: 500px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    margin: "24px auto",
  },
};

const ConfirmationModal = ({ isOpen, onClose, question, onConfirm }) => {
  return (
    <ModalStyled
      ariaHideApp={false}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
    >
      <h3>{question}</h3>
      <ButtonGroup>
        <ConfirmButton
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Yes
        </ConfirmButton>
        <SecondaryButton onClick={() => onClose()}>No</SecondaryButton>
      </ButtonGroup>
    </ModalStyled>
  );
};

export default ConfirmationModal;
