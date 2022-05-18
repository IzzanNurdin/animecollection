import React from "react";
import Modal from "react-modal";
import {
  ContentWrapper,
  HeaderWrapper,
  AddCollectionWrapper,
} from "components/AddToCollectionModal/components";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { UseCollectionContext } from "context/CollectionContext";
import { ButtonGroup, CloseCollectionModalButton } from "components/Buttons";
import { checkCollectionAvailable } from "utils/objectChecker";
import styled from "@emotion/styled";

const ModalStyled = styled(Modal)`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const AddNewCollectionModal = ({ isOpen, onClose }) => {
  const { collectionList, setCollectionList, setFilteredCollection } =
    UseCollectionContext();

  const [newCollectionName, setNewCollectionName] = React.useState("");

  const closeModal = () => {
    onClose();
  };

  const addNewCollection = (value) => {
    const tmp = collectionList;
    if (checkCollectionAvailable(Object.keys(tmp), value)) {
      toast.warn(`${value} already exist`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      tmp[value] = [];
      setCollectionList(tmp);
      setFilteredCollection(Object.keys(tmp));
      setNewCollectionName("");
      onClose();
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      height: "fit-content",
      color: "black",
      margin: "24px auto",
    },
  };

  return (
    <ModalStyled
      ariaHideApp={false}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <HeaderWrapper>
        <h2>Add to Collection</h2>
        <CloseCollectionModalButton onClick={closeModal}>
          <MdCancel />
        </CloseCollectionModalButton>
      </HeaderWrapper>
      <ContentWrapper>
        <AddCollectionWrapper>
          <input
            placeholder="Input collection name here"
            onChange={(e) => setNewCollectionName(e.target.value)}
            value={newCollectionName}
          />
          <ButtonGroup>
            <button
              onClick={() => addNewCollection(newCollectionName)}
              style={{ backgroundColor: "green", width: "100px" }}
            >
              Add
            </button>
            <button
              style={{ backgroundColor: "firebrick", width: "100px" }}
              onClick={() => {
                onClose();
                setNewCollectionName("");
              }}
            >
              Cancel
            </button>
          </ButtonGroup>
        </AddCollectionWrapper>
      </ContentWrapper>
    </ModalStyled>
  );
};

export default AddNewCollectionModal;
