import buildServer from "./app";

const server = buildServer();
const PORT = process.env.PORT || 3000;
const start = () => {
  try {
    server.listen(
      {
        port: PORT,
        host: "0.0.0.0",
      },
      () => {
        console.log(`${new Date()}`);
        console.log(`server run in http://localhost:${PORT}`);
      },
    );
  } catch (error) {
    console.log(`server crush in ${error}`);
    process.exit(1);
  }
};
start();
