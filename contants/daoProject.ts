// import { DaosProject } from "./daosName";

export const getDaosAddress = (name: string | null) => {
  return (
    {
      uniswap: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
      shushiswap: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
      Balancer: '0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f',
    }[name || ''] || name
  );
};
