import styled from "@emotion/styled";
import React from "react";
import Modal from "react-modal";
import { ConfirmButton, SecondaryButton, ButtonGroup } from "./Buttons";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    width: "500px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    margin: "0 auto",
  },
};

const ConfirmationModal = ({ isOpen, onClose, question, onConfirm }) => {
  return (
    <Modal
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
    </Modal>
  );
};

export default ConfirmationModal;
