import { BaseRes } from "../BaseRes";
import { CardInfoRes } from "./types";

export interface GetAllCardRes extends BaseRes {
  data: CardInfoRes[];
}
