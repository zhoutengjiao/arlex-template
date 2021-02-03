const chokidar = require("chokidar");
const bodyParser = require("body-parser");
const path = require("path");

const mockDir = path.join(process.cwd(), "mock");

function registerRoutes(app) {
  const mocks = require("./mock");
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response);
  }
  return {
    routesLength: mocks.length,
    startIndex: app._router.stack.length - mocks.length,
  };
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)];
    }
  });
}

module.exports = (app) => {
  app.use("/mock", bodyParser.json());
  app.use(
    "/mock",
    bodyParser.urlencoded({
      extended: true,
    })
  );

  let { routesLength, startIndex } = registerRoutes(app);
  chokidar
    .watch(mockDir, {
      ignored: "/mockServer/",
      ignoreInitial: true,
    })
    .on("all", (event) => {
      if (event === "change" || event === "add") {
        app._router.stack.splice(startIndex, routesLength);
        unregisterRoutes();

        const routerRes = registerRoutes(app);
        routesLength = routerRes.routesLength;
        startIndex = routerRes.startIndex;
      }
    });
};
