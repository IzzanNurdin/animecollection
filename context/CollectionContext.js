import React from "react";
import { getLocalStorage, setLocalStorage } from "../utils/webStorage";

const CollectionContext = React.createContext();

export const UseCollectionContext = () => {
  return React.useContext(CollectionContext);
};

export const CollectionContextProvider = (props) => {
  const [collectionList, setCollectionList] = React.useState({});
  const [filteredCollection, setFilteredCollection] = React.useState([]);

  const setCollectionItem = (value) => {
    setCollectionList(value);
    setLocalStorage("collection_list", JSON.stringify(value));
  };

  React.useEffect(() => {
    if (getLocalStorage("collection_list") === null) {
      setLocalStorage("collection_list", JSON.stringify({}));
    }
    setCollectionList(JSON.parse(getLocalStorage("collection_list")));
    setFilteredCollection(
      Object.keys(JSON.parse(getLocalStorage("collection_list")))
    );
  }, []);

  // Assign React state and constants to context object
  const CollectionContextObject = {
    collectionList,
    setCollectionList: setCollectionItem,
    filteredCollection,
    setFilteredCollection,
  };

  return (
    <CollectionContext.Provider value={CollectionContextObject}>
      {props.children}
    </CollectionContext.Provider>
  );
};
