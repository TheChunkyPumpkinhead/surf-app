import config from "../config";

const JotzApiService = {
  getJotz() {
    return fetch(`${config.API_ENDPOINT}/Jotz`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  async getJotz(jotzId) {
    const res = await fetch(`${config.API_ENDPOINT}/jotz/${jotzId}`, {
      headers: {},
    });
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
  },

  postJotz(jotz) {
    return fetch(`${config.API_ENDPOINT}/jotz/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jotz),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default JotzApiService;
