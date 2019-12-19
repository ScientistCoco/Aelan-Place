 const generalReq = (url: string, data: object, headers: object, type: string) => {
  return fetch(url, {
    method: `${type}`,
    body: JSON.stringify(data),
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      ...headers
    },
  });
};

export const post = (url: string, data: object, headers: object) => {
  return generalReq(url, data, headers, "POST");
};

export const deleteReq = (url: string, data: object, headers: object) => {
  return generalReq(url, data, headers, "DELETE");
};

export const get = (url: string, params = "", headers?: any) => {
  let getUrl = url;

  const parameters = Object.keys(params);

  // setup query parameters
  if (params && parameters && parameters.length > 0) {
    const query = Object.keys(params)
      .filter((i: any) => params[i] !== null) // skip null values
      .map((i: any) => encodeURIComponent(i) + "=" + encodeURIComponent(params[i])) // concatenate key=value
      .join("&"); // separate by &

    getUrl = `${url}${query}`; // add ?parameters=values
  }

  return fetch(getUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...headers
    },
    credentials: "same-origin"
  });
};