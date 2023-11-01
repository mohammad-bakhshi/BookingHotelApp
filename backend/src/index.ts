import { createServer } from "http";
import { config } from "dotenv";
import app from "./app";

config();
const port = process.env.PORT;
const server = createServer(app);
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
