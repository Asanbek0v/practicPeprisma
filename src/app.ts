import express from "express";
import "dotenv/config";
import router from "./routes";
const buildServer = () => {
  const server = express();
  server.use(express.json());
  server.use("/api/v1", router);
  server.get("/", (req, res) => {
    res.status(200).json({
      succes: true,
      message: "hello Dastan",
    });
  });
  return server;
};
export default buildServer;
