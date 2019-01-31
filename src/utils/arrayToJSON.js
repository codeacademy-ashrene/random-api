const arrayToJSON = (array) => {
  const object = {};
  array.forEach((element, index) => {
    object[index] = element;
  });
  return JSON.stringify(object);
};

module.exports = arrayToJSON;
