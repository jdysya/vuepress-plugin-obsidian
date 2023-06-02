export function tabsReplace(md) {
    // Define a regular expression to match the fence blocks we want to convert
    const fenceRegex = /^(`{3,})tabs\s*([\s\S]+?)\s*\1$/gm;

    // Replace the fence blocks with container syntax before parsing
    md.core.ruler.before('normalize', 'custom-fence', state => {
        state.src = state.src.replace(fenceRegex, match => {
            match = match.replaceAll('````', '::::')
                .replaceAll('tab:', '@tab ')
            return match;
        });
    });
}