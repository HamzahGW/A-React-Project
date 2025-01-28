import { APP_CONFIG } from "@tx/configs";
import { EtxProduct, TOptions } from "@tx/util-models";

export function getQueryParamters(list: TOptions[]): string {
  let queryParams = "";
  list.forEach((item) => {
    queryParams += `?${item.label}=${item.value}`;
  });
  return queryParams;
}

export const mergePaths = (paths: string[]) => {
  return "/" + paths.join("/");
};

export function joinBooleans(...values: unknown[]) {
  return values.filter(Boolean).join(" ");
}

export function isAtheer(): boolean {
  return APP_CONFIG.CHANNEL === EtxProduct.ATHEER;
}

export function isSukuk(): boolean {
  return APP_CONFIG.CHANNEL === EtxProduct.SUKUK;
}
