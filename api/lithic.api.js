import axios from "axios";

export const getLithicData = async (page) => {
  let res = await axios.get(
    "https://lithic-api-proxy--timmy_i_chen.repl.co/v1/transactions",
    {
      params: {
        page: page,
        page_size: 20,
      },
      headers: {
        Authorization: "834763e1-4d25-4248-a81c-9036e14313bf",
      },
    }
  );
  return res.data;
};
