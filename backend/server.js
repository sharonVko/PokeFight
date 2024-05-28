import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;

// Set headers for CORS policy due to localhost environment
app.use(cors());
const setHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
};

// Fetcht alle Pokemon
app.get("/pokemon", async (req, res) => {
  try {
    const pokeDexData = await fetch(
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
    );
    const data = await pokeDexData.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
//
app.get("/pokemon/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const pokeSoloData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeData = await pokeSoloData.json();
    res.json(pokeData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
