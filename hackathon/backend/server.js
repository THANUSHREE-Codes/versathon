const express = require("express");
const cors = require("cors");
const { createHash } = require("./utils/hash");
const QRCode = require("qrcode");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory database
let students = [];

// Test route
app.get("/", (req, res) => res.send("Backend Running 🚀"));

// University adds student certificate
app.post("/add-certificate", async (req, res) => {
  const { name, course } = req.body;
  if (!name || !course) return res.status(400).json({ error: "Missing data" });

  const dataString = `${name}-${course}-${Date.now()}`;
  const hash = createHash(dataString);

  // Generate QR code for student
  const qrData = await QRCode.toDataURL(dataString);

  students.push({ name, course, hash, qrData });

  res.json({ message: "Certificate added", hash, qrData });
});

// Student checks certificate
app.post("/check-certificate", (req, res) => {
  const { name, course } = req.body;
  const student = students.find(
    (s) => s.name === name && s.course === course
  );
  if (!student) return res.status(404).json({ valid: false });

  res.json({ valid: true, hash: student.hash, qrData: student.qrData });
});

// HR verifies certificate (simulate blockchain verification)
app.post("/verify-blockchain", (req, res) => {
  const { hash } = req.body;
  const found = students.find((s) => s.hash === hash);
  res.json({ verified: !!found });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
