import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World world!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
