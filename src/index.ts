import { tagReplace } from "./markdown-it-plugins/tagReplace";
import {contaninerReplace} from "./markdown-it-plugins/containerReplace";
import { linkReplace } from "./markdown-it-plugins/linkReplace";

const obsidianPlugin = (options?: any) => {
  return {
    name: 'vuepress-plugin-obsidian',
    extendsMarkdown: (md) => {
      md.use(tagReplace)
        .use(contaninerReplace)
        .use(linkReplace)
    }
  }
}

export default obsidianPlugin
