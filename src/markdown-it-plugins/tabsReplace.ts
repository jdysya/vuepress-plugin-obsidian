export function tabsReplace(md) {
    // Define a regular expression to match the fence blocks we want to convert
    const fenceRegex = /^(`{3,})tabs\s*([\s\S]+?)\s*\1$/gm;

    // Replace the fence blocks with container syntax before parsing
    md.core.ruler.before('normalize', 'custom-fence', state => {
        state.src = state.src.replace(fenceRegex, match => {
            // 在这里处理匹配到的围栏块
            // 要求容器内嵌套容器时,需要使用四个反引号
            if (match.indexOf('````') !== -1) {
                // 说明当前使用的是三个反引号
                match = match.replaceAll('````', '::::')
            }
            else {
                match = match.replaceAll('```', ':::')
            }
            match = match.replaceAll('tab:', '@tab ')
            // 可以根据需求对围栏块的内容进行修改或替换
            return match; // 返回处理后的围栏块内容
        });
    });
}