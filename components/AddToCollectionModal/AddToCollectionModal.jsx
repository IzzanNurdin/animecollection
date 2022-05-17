import React from "react";
import Modal from "react-modal";
import { setLocalStorage } from "../../utils/webStorage";
import { checkAvailable } from "../../utils/objectChecker";
import {
  CloseButton,
  CollectionListWrapper,
  ContentWrapper,
  HeaderWrapper,
  AddButton,
  AddCollectionWrapper,
  AnimeItem,
} from "./components";
import { MdCancel } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "../SearchBar";
import { UseCollectionContext } from "../../context/CollectionContext";

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
    tmp[value] = [];
    setCollectionList(tmp);
    setFilteredCollection(Object.keys(tmp));
    setLocalStorage("collection_list", JSON.stringify(tmp));
    setNewCollectionName("");
    setAddCollection(false);
  };

  const addAnimeToCollection = (collection) => {
    const tmp = collectionList;
    const dataTmp = {
      id: data.id,
      bannerImage: data.bannerImage,
      title: data.title,
    };
    if (checkAvailable(tmp[collection], dataTmp)) {
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
      setLocalStorage("collection_list", JSON.stringify(tmp));
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
                  return (
                    <AnimeItem onClick={() => addAnimeToCollection(item)}>
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
                    </AnimeItem>
                  );
                })}
          </CollectionListWrapper>
        )}
      </ContentWrapper>
    </Modal>
  );
};

export default AddToCollectionModal;
