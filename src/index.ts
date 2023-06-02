import { tagReplace } from "./markdown-it-plugins/tagReplace";
import {contaninerReplace} from "./markdown-it-plugins/containerReplace";
import { linkReplace } from "./markdown-it-plugins/linkReplace";
import { tabsReplace } from "./markdown-it-plugins/tabsReplace";

const obsidianPlugin = (options?: any) => {
  return {
    name: 'vuepress-plugin-obsidian',
    extendsMarkdown: (md) => {
      md.use(tagReplace)
        .use(contaninerReplace)
        .use(linkReplace)
        .use(tabsReplace)
    }
  }
}

export default obsidianPlugin
