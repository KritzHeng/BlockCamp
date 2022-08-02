// import { DaosProject } from "./daosName";

export const getDaosAddress = (name: string | null) => {
  return (
    {
      uniswap: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
      shushiswap: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
      olympusdao: '0x886CE997aa9ee4F8c2282E182aB72A705762399D',
    }[name || ''] || name
  );
};
