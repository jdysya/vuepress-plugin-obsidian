export function contaninerReplace(md) {
    const defaultRenderer = md.renderer.rules.fence;

    // Define a regular expression to match the fence blocks we want to convert
    const fenceRegex = /^(`{3,4})ad-(tip|warning|note|info|danger|right|center)\s*\n([\s\S]+?)\n\1$/gm;

    // Replace the fence blocks with container syntax before parsing
    md.core.ruler.before("normalize", "fence-to-container", state => {
        state.src = state.src.replace(fenceRegex, (match, prefix, type, content) => {
            let title = "", collapse = "";
            const titleMatch = content.match(/title:\s*(.*)/);
            if (titleMatch) {
                title = titleMatch[1];
                content = content.replace(/title:\s*(.*)/, "");
            }
            const collapseMatch = content.match(/collapse:\s*(.*)/);
            if (collapseMatch) {
                collapse = collapseMatch[1];
                content = content.replace(/collapse:\s*(.*)/, "");
            }
            let containerContent = `:::${type} ${title}\n${content}\n:::`;
            if (collapse === "true") {
                containerContent = `:::details ${title}\n${content}\n:::`;
            }
            if(type === "right" || type === "center"){
                containerContent = `:::${type}\n${content}\n:::`;
            }
            return containerContent;
        });
    });

    // Render the container blocks using the default renderer
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        if (token.type === "fence" && token.info.startsWith("ad-")) {
            return defaultRenderer(tokens, idx, options, env, self);
        }
        return defaultRenderer(tokens, idx, options, env, self);
    };

}


