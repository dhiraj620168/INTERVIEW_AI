import express from "express";

import isAuth from "../middlewares/isAuth.js";

import {
  generateNotes,
} from "../controllers/notes.controller.js";

const notesRouter = express.Router();

notesRouter.post(
  "/generate",
  isAuth,
  generateNotes
);

export default notesRouter;