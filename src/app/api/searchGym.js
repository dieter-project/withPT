pages / api / searchGym.js;
import { searchGym } from "@/lib/kakaoApi";

export default async function handler(req, res) {
  const { keyword, latitude, longitude, radius } = req.query;
  const location = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };

  try {
    const data = await searchGym(keyword, location, parseInt(radius, 10));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
