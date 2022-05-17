import React from "react";
import Modal from "react-modal";
import { getLocalStorage, setLocalStorage } from "../../utils/webStorage";
import {
  CloseButton,
  CollectionListWrapper,
  ContentWrapper,
  HeaderWrapper,
  AddButton,
  AddCollectionWrapper,
} from "./components";
import { MdCancel } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import SearchBar from "../SearchBar";
import { UseCollectionContext } from "../../context/CollectionContext";

const AddToCollectionModal = ({ isOpen, onClose }) => {
  const {
    collectionList,
    setCollectionList,
    setFilteredCollection,
    filteredCollection,
  } = UseCollectionContext();

  const [isAddCollection, setAddCollection] = React.useState(false);
  const [newCollectionName, setNewCollectionName] = React.useState("");
  const [querySearch, setQuerySearch] = React.useState("");

  React.useEffect(() => {
    setFilteredCollection(
      Object.keys(collectionList).filter((item) => {
        return item.toLowerCase().indexOf(querySearch) >= 0;
      })
    );
  }, [querySearch]);

  const closeModal = () => {
    onClose();
    setAddCollection(false);
  };

  const addNewCollection = (value) => {
    const tmp = collectionList;
    tmp[value] = {};
    setCollectionList(tmp);
    setFilteredCollection(Object.keys(tmp));
    setLocalStorage("collection_list", JSON.stringify(tmp));
    setNewCollectionName("");
    setAddCollection(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      width: "500px",
      color: "black",
      margin: "0 auto",
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <HeaderWrapper>
        <h2>Add to Collection</h2>
        <CloseButton onClick={closeModal}>
          <MdCancel />
        </CloseButton>
      </HeaderWrapper>
      <ContentWrapper>
        {!isAddCollection ? (
          <AddButton onClick={() => setAddCollection(true)}>
            <FiPlusCircle />
            Add new collection
          </AddButton>
        ) : (
          <AddCollectionWrapper>
            <input
              placeholder="Input collection name here"
              onChange={(e) => setNewCollectionName(e.target.value)}
              value={newCollectionName}
            />
            <button
              onClick={() => addNewCollection(newCollectionName)}
              style={{ backgroundColor: "green" }}
            >
              Add
            </button>
            <button
              style={{ backgroundColor: "firebrick" }}
              onClick={() => {
                setAddCollection(false);
                setNewCollectionName("");
              }}
            >
              Cancel
            </button>
          </AddCollectionWrapper>
        )}
        <SearchBar
          width="100%"
          placeholder={"Find your collection here"}
          value={querySearch}
          onChange={setQuerySearch}
        />
        {!collectionList || Object.keys(collectionList).length === 0 ? (
          <CollectionListWrapper>No Collection Yet</CollectionListWrapper>
        ) : (
          <CollectionListWrapper>
            {filteredCollection.length === 0
              ? "No Collection found"
              : filteredCollection.map((item) => {
                  return <div>{item}</div>;
                })}
          </CollectionListWrapper>
        )}
      </ContentWrapper>
    </Modal>
  );
};

export default AddToCollectionModal;
