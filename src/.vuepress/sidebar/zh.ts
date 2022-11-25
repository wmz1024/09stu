import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "discover",
      prefix: "article/",
      children: "structure",
    },
  ],
});
