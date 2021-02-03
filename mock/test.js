module.exports = [
  {
    url: "/get/list",
    type: "get",
    response: (req, res) => {
        console.log(req, res)
      return {
        code: 0,
        data: [1, 2, 3, 4, 5],
      };
    },
  },
  {
    url: "/get/one",
    type: "get",
    response: {
      code: 0,
      data: 1,
    },
  },
];
