export function tagReplace(md) {
  md.inline.ruler.before('text', 'badge', function (state, silent) {
    var tagRegExp = /(?<!`)(?:^|[^`\w\u4e00-\u9fa5])#([\u4e00-\u9fa5\w]+)/g; // 匹配 #tag 的正则表达式,防止匹配到行内代码块
    var match = tagRegExp.exec(state.src.slice(state.pos)); // 尝试匹配 #tag
    if (!match) return false; // 如果没有匹配到，继续处理下一个 token
    if (!silent) { // 如果成功匹配，则生成对应的 token
      var token = state.push('badge_open', 'Badge', 1);
      token.attrs = [['type', 'danger']];
      token = state.push('text', '', 0);
      token.content = match[0].slice(1); // 去掉开头的 #
      token = state.push('badge_close', 'Badge', -1);
    }
    state.pos += match[0].length; // 跳过匹配到的字符串
    return true;
  });
}
