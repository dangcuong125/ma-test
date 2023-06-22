export type Lang = "en" | "vi";
export type FileType = "png" | "jpg" | "jpeg" | "pdf";

export const langs: Record<Lang, LangObj> = {
  en: {
    label: "English",
    value: "en",
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  vi: {
    label: "Vietnamese",
    value: "vi",
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
};

export interface PresignedResponse {
  id: number;
  url: string;
}
export interface BaseResponse {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  version: number;
  id: number;
}
export interface ImageResponse {
  id: number;
  key: string;
  type: FileType;
  url: string | null;
  fileName?: string;
}

export interface ListResponse<T> {
  data: T[];
  total: number;
}

export interface ErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}

export interface LangObj {
  label: string;
  value: Lang;
  icon: string;
}

export type ISelectedLang = {
  payload: LangObj;
  type: string;
};
