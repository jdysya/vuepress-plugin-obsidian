import { tagReplace } from "./markdown-it-plugins/tagReplace";
import {contaninerReplace} from "./markdown-it-plugins/containerReplace";

const obsidianPlugin = (options?: any) => {
  return {
    name: 'vuepress-plugin-obsidian',
    extendsMarkdown: (md) => {
      md.use(tagReplace)
        .use(contaninerReplace)
    }
  }
}

export default obsidianPlugin
