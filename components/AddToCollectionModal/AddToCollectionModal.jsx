import React from "react";
import Modal from "react-modal";
import {
  CollectionListWrapper,
  ContentWrapper,
  HeaderWrapper,
  AddCollectionWrapper,
  CollectionItem,
} from "./components";
import { MdCancel } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "../SearchBar";
import { UseCollectionContext } from "../../context/CollectionContext";
import {
  AddNewCollectionButton,
  ButtonGroup,
  CloseCollectionModalButton,
} from "components/Buttons";
import {
  checkCollectionAvailable,
  checkAnimeAvailable,
} from "utils/objectChecker";
import styled from "@emotion/styled";

const ModalStyled = styled(Modal)`
  width: 500px;
  height: 80%;
  overflow: auto;
  background-color: white;
  top: 24px;
  border-radius: 12px;
  padding: 12px 24px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

const AddToCollectionModal = ({ isOpen, onClose, data }) => {
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
      setAddCollection(false);
    }
  };

  const addAnimeToCollection = (collection) => {
    const tmp = collectionList;
    const dataTmp = {
      id: data.id,
      bannerImage: data.bannerImage,
      title: data.title,
    };
    if (checkAnimeAvailable(tmp[collection], dataTmp)) {
      toast.warn(`Anime already added to ${collection}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      tmp[collection] = [
        ...tmp[collection],
        { id: data.id, bannerImage: data.bannerImage, title: data.title },
      ];
      setCollectionList(tmp);
      setFilteredCollection(Object.keys(tmp));
      onClose(collection);
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
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
        {!isAddCollection ? (
          <AddNewCollectionButton onClick={() => setAddCollection(true)}>
            <FiPlusCircle />
            Add new collection
          </AddNewCollectionButton>
        ) : (
          <AddCollectionWrapper>
            <input
              placeholder="Input collection name here"
              onChange={(e) => setNewCollectionName(e.target.value)}
              value={newCollectionName}
            />
            <ButtonGroup>
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
            </ButtonGroup>
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
                  return (
                    <CollectionItem
                      key={item.id}
                      onClick={() => addAnimeToCollection(item)}
                    >
                      <img
                        src={
                          collectionList[item].length > 0 &&
                          collectionList[item][0].bannerImage
                            ? collectionList[item][0].bannerImage
                            : "https://via.placeholder.com/120x80?text=Image%20Not%20Found"
                        }
                        alt={`anime-${item}`}
                      />
                      <label>{item}</label>
                    </CollectionItem>
                  );
                })}
          </CollectionListWrapper>
        )}
      </ContentWrapper>
    </ModalStyled>
  );
};

export default AddToCollectionModal;
