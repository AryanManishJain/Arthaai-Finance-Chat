const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post("/api/chat", (req, res) => {
  const { question = "", focus = "general" } = req.body || {};

  const cleaned = String(question).toLowerCase();

  if (!cleaned.trim()) {
    return res.status(400).json({ reply: "Please ask a finance question." });
  }

  const focusReply = {
    general:
      "Give me your monthly income, fixed expenses, debts, and goals so I can suggest a practical plan.",
    startup:
      "For startups, monitor runway, burn multiple, gross margin, and CAC payback each month.",
    investing:
      "For investing, define your horizon and risk first, then allocate across diversified instruments.",
    budgeting:
      "Build a budget with needs, wants, and savings buckets. Review and rebalance monthly.",
    tax:
      "For taxes, track deductible categories and filing deadlines, then choose the right regime with a CA."
  };

  if (cleaned.includes("guaranteed") || cleaned.includes("double money")) {
    return res.json({
      reply:
        "I can’t support guaranteed-return claims. Use diversified, risk-aware plans and verify with a licensed advisor."
    });
  }

  return res.json({ reply: focusReply[focus] || focusReply.general });
});

app.listen(port, () => {
  console.log(`ArthaAI running at http://localhost:${port}`);
});
