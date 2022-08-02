// import { DaosProject } from "./daosName";

export const getDaosAddress = (name: string | null) => {
  return ({
    "uniswap": "0x1234",
    ""
  })[name || ''] || name
};
