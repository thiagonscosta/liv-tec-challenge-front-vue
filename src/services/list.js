import { api } from "./api";

const BASE_ENDPOINT = "/list";

function fetchLists() {
  return new Promise((resolve, reject) => {
    api
      .get(`${BASE_ENDPOINT}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function createList(list) {
  console.log(list);
  return new Promise((resolve, reject) => {
    api
      .post(`${BASE_ENDPOINT}`, list)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function updateList(list) {
  return new Promise((resolve, reject) => {
    api
      .patch(`${BASE_ENDPOINT}`, list)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteList(id) {
  return new Promise((resolve, reject) => {
    api
      .delete(`${BASE_ENDPOINT}/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export default {
  fetchLists,
  createList,
  updateList,
  deleteList,
};
