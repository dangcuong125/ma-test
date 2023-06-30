// @mui
import { enUS, frFR, zhCN, viVN, arSD } from "@mui/material/locale";
import { SettingsValueProps } from "./components/settings/type";
// components
// routes

export const defaultSettings: SettingsValueProps = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "bold",
  themeLayout: "horizontal",
  themeColorPresets: "red",
  themeStretch: false,
};

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "Vietnamese",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
];

export const defaultLang = allLangs[1]; // English

export const MERCHANT_ID = 1;

