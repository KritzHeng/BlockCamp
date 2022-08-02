// import { DaosProject } from "./daosName";

export const getDaosAddress = (name: string | null) => {
  return ({
    "uniswap": "0x1a9C8182C09F50C8318d769245beA52c32BE35BC",
    "aave": "0x25f2226b597e8f9514b3f68f00f494cf4f286491",
    "olympusdao": "0x886CE997aa9ee4F8c2282E182aB72A705762399D",
  })[name || ''] || name
};
