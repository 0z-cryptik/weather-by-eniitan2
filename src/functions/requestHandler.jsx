export const reqFunc = (query) => {
  const weatherReq = {
    method: "GET",
    url: "/forecast.json",
    params: {
      q: query,
      days: "3"
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  };

  return weatherReq;
};
