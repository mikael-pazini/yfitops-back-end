import express from "express";
import cors from "cors";
import { db } from "./api/connect.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("access '/artists' or '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
