const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const commonPasswords = ["123456", "password", "admin", "qwerty"];

function analyze(password) {
  let score = 0;
  let suggestions = [];

  if (commonPasswords.includes(password)) {
    return { strength: "Very Weak", suggestions: ["Avoid common passwords"] };
  }

  if (password.length >= 8) score++;
  else suggestions.push("Use at least 8 characters");

  if (/[A-Z]/.test(password)) score++;
  else suggestions.push("Add uppercase letters");

  if (/[a-z]/.test(password)) score++;
  else suggestions.push("Add lowercase letters");

  if (/[0-9]/.test(password)) score++;
  else suggestions.push("Include numbers");

  if (/[\W]/.test(password)) score++;
  else suggestions.push("Add special characters");

  let strength = "Weak";
  if (score > 2) strength = "Medium";
  if (score > 4) strength = "Strong";

  return { strength, suggestions };
}

app.post("/check-password", async (req, res) => {
  const { password } = req.body;
  const result = analyze(password);
  const hashed = await bcrypt.hash(password, 10);
  res.json({ ...result, hashed });
});

app.listen(5000, () => console.log("Server running on port 5000"));