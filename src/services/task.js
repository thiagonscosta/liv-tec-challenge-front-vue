import { api } from "./api";

const BASE_ENDPOINT = "/task";

function createTask(list) {
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

function updateTask(task) {
  return new Promise((resolve, reject) => {
    api
      .patch(`${BASE_ENDPOINT}`, task)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function moveTask(id, list_id) {
  return new Promise((resolve, reject) => {
    api
      .post(`${BASE_ENDPOINT}/${id}/moveTo/${list_id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteTask(id) {
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
  createTask,
  updateTask,
  deleteTask,
  moveTask,
};
