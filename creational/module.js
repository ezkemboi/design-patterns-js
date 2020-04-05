/**
 * module is basically object literal
 */
const repo = function () {
  // private variable
  const db = {};

  const get = function (id) {
    return `New task created with id -> ${id}`
  }

  const save = function (data) {
    return `save data -> ${data}`;
  }

  return {
    get: get,
    save: save
  }
}

module.exports = repo();
