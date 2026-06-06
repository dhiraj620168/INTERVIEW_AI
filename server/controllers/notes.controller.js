import Note from "../models/note.model.js";
import User from "../models/user.model.js";
import axios from "axios";

export const generateNotes = async (req, res) => {
  try {
    const { topic } = req.body;

    const userId = req.userId;

    const user = await User.findById(userId);

    if (user.credits < 5) {
      return res.json({
        success: false,
        message: "Not enough credits",
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",

        messages: [
          {
            role: "user",
            content: `Generate detailed study notes on ${topic}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
      }
    );

    const aiNotes =
      response.data.choices[0].message.content;

    const note = await Note.create({
      userId,
      topic,
      content: aiNotes,
    });

    user.credits -= 5;

    await user.save();

    res.json({
      success: true,
      note,
      credits: user.credits,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};