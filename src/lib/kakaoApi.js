import axios from "axios";

export async function searchGym(keyword, location, radius) {
  const apiKey = "xxa0f627d47ad4dae0a724fbb410e51cd8";
  const url = "https://dapi.kakao.com/v2/local/search/keyword.json";
  const headers = { Authorization: `KakaoAK ${apiKey}` };
  const params = {
    query: keyword,
    x: location.longitude,
    y: location.latitude,
    radius: radius,
  };

  const response = await axios.get(url, { headers, params });
  return response.data;
}
