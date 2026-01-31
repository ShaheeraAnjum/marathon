const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------- API: AI Answer ---------- */
app.post("/api/answer", (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  res.json({
    answer:
      "This AI-generated answer directly satisfies the user's intent. A zero-click outcome indicates successful task completion, not disengagement.",
    interpretation: [
      "Short session duration indicates fast satisfaction",
      "Zero-click behavior treated as positive outcome",
      "User intent classified as informational",
    ],
    newSignals: [
      "Answer expansion interaction",
      "Query reformulation probability",
      "Follow-up intent depth",
    ],
    revenueSafety: [
      "Ads injected contextually",
      "Revenue attribution delayed",
      "High satisfaction session preserved as value",
    ],
  });
});

/* ---------- SERVER ---------- */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});