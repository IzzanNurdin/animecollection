import { getLocalStorage } from "./webStorage";

export function checkAvailable(currCollection, anime) {
  for (let i = 0; i < currCollection.length; i++) {
    if (currCollection[i].id === anime.id) {
      return true;
    }
  }

  return false;
}

export function listedCollection(animeId) {
  const collectionList = JSON.parse(getLocalStorage("collection_list"));
  const keyList = Object.keys(collectionList);

  const listResult = [];

  for (let i = 0; i < keyList.length; i++) {
    for (let j = 0; j < collectionList[keyList[i]].length; j++) {
      console.log(collectionList[keyList[i]][j]);
      if (collectionList[keyList[i]][j].id === animeId) {
        listResult.push(keyList[i]);
        break;
      }
    }
  }

  return listResult;
}
