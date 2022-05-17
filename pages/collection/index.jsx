import React from "react";
import Head from "next/head";
import { getSessionStorage, setSessionStorage } from "utils/webStorage";
import { CollectionItem } from "components/Collection/components";
import { HeaderWrapper } from "components/Collection/components";
import { ListWrapper } from "pages";
import { FiPlusCircle } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";
import SearchBar from "components/SearchBar";
import { UseCollectionContext } from "context/CollectionContext";
import { AddDetailCollectionButton, BackButton } from "components/Buttons";
import AddNewCollectionModal from "components/Collection/AddNewCollectionModal";

const CollectionList = () => {
  const { collectionList, filteredCollection, setFilteredCollection } =
    UseCollectionContext();
  const [querySearch, setQuerySearch] = React.useState("");
  const [isAddCollection, setAddCollection] = React.useState(false);

  React.useEffect(() => {
    setQuerySearch(
      getSessionStorage("collection_search") === ""
        ? ""
        : getSessionStorage("collection_search")
    );
  }, []);

  React.useEffect(() => {
    setFilteredCollection(
      Object.keys(collectionList).filter((item) => {
        return item.toLowerCase().indexOf(querySearch) >= 0;
      })
    );
  }, [querySearch]);

  const setQuery = React.useCallback((value) => {
    setQuerySearch(value);
    setSessionStorage("collection_search", value);
  });

  return (
    <div>
      <Head>
        <title>Anime Collection</title>
        <meta name="description" content="Anime Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddNewCollectionModal
        isOpen={isAddCollection}
        onClose={() => setAddCollection(false)}
      />
      <HeaderWrapper>
        <BackButton>
          <a href="/">
            <RiArrowGoBackLine width={48} height={48} />
          </a>
        </BackButton>
        <SearchBar
          value={querySearch}
          onChange={setQuery}
          placeholder="Find your collection here"
        />
        <AddDetailCollectionButton onClick={() => setAddCollection(true)}>
          <FiPlusCircle />
          Add new collection
        </AddDetailCollectionButton>
      </HeaderWrapper>
      <ListWrapper>
        {filteredCollection.length === 0
          ? "No Collection found"
          : filteredCollection.map((item) => {
              return (
                <CollectionItem key={item.id} href={`/collection/${item}`}>
                  <img
                    src={
                      collectionList[item].length > 0 &&
                      collectionList[item][0].bannerImage
                        ? collectionList[item][0].bannerImage
                        : "https://via.placeholder.com/350x130?text=Image%20Not%20Found"
                    }
                    alt={`anime-${item}`}
                  />
                  <label>{item}</label>
                </CollectionItem>
              );
            })}
      </ListWrapper>
    </div>
  );
};

export default CollectionList;
