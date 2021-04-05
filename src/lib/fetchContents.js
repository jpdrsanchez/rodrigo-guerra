const fetchContents = async (url) => {
  let response;
  let data;

  try {
    response = await fetch(url);
    data = await response.json();

    if (!response.ok) throw new Error(data.message);
  } catch (err) {
    data = null;
  } finally {
    return { response, data };
  }
};

export default fetchContents;
