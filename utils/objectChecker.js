import { UseCollectionContext } from "context/CollectionContext";
import { getLocalStorage, setLocalStorage } from "./webStorage";

/** Return true if anime already available in collection */
export function checkAnimeAvailable(currCollection, anime) {
  for (let i = 0; i < currCollection.length; i++) {
    if (currCollection[i].id === anime.id) {
      return true;
    }
  }

  return false;
}

/** Return true if collection name already available */
export function checkCollectionAvailable(collectionKeys, collectionName) {
  if (collectionKeys.indexOf(collectionName) >= 0) {
    return true;
  }

  return false;
}

export function listedCollection(animeId) {
  const collectionList = JSON.parse(getLocalStorage("collection_list"));
  const keyList = Object.keys(collectionList);

  const listResult = [];

  for (let i = 0; i < keyList.length; i++) {
    for (let j = 0; j < collectionList[keyList[i]].length; j++) {
      if (collectionList[keyList[i]][j].id === animeId) {
        listResult.push(keyList[i]);
        break;
      }
    }
  }

  return listResult;
}

export function removeAnimeCollection(
  animeId,
  collectionList,
  setCollectionList
) {
  const keyList = Object.keys(collectionList);

  let removed = false;
  const tmp = collectionList;

  for (let i = 0; i < keyList.length; i++) {
    for (let j = 0; j < collectionList[keyList[i]].length; j++) {
      if (collectionList[keyList[i]][j].id === animeId) {
        tmp[keyList[i]].splice(j, 1);
        setCollectionList(tmp);
        removed = true;
        break;
      }
    }
    if (removed) {
      break;
    }
  }
}

export function removeCollection(item, collectionList, setCollectionList) {
  const tmp = collectionList;
  delete tmp[item];
  console.log(tmp);
  setCollectionList(tmp);
}
