import "dotenv/config";
import buildServer from "./app";

const app = buildServer();
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server started on port ${PORT}`);
});
