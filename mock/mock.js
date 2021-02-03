const Mock = require("mockjs");

const test = require("./test");

const mocks = [...test];

const resUtil = (url, type, response) => {
  return {
    url: `/mock${url}`,
    type: type || "get",
    response: (req, res) => {
      res.json(
        Mock.mock(response instanceof Function ? response(req, res) : response)
      );
    },
  };
};

module.exports = mocks.map((item) => {
  return resUtil(item.url, item.type, item.response);
});
