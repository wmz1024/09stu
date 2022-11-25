import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "09同学很文雅",
      description: "此网站存放着2017级09班同学们各种各样的事情",
    },
  },

  theme,

  shouldPrefetch: false,
});
