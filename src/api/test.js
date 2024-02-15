export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    res.status(200).json({ message: "A ok!" });
  } catch (error) {
    res.status(500).json({ message: "Error!" });
  }
}
