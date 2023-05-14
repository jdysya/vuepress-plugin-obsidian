export function linkReplace(md) {
    // Override the default rule for parsing links
    const defaultLinkRule = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options, env, self);
    };
    
    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      const token = tokens[idx];
      const hrefIndex = token.attrIndex('href');
      const href = token.attrs[hrefIndex][1];
      
      // Split the link into its URL and anchor portions
      const [url, anchor] = href.split('#');
      
      // Replace dots in the anchor portion and add an underscore if it starts with a number
      const newAnchor = anchor ? anchor.replace(/\./g, '-').replace(/^(\d)/, '_$1').replace("%20",'') : '';
      
      // Build the modified link
      const newHref = url + (newAnchor ? `#${newAnchor}` : '');
      token.attrs[hrefIndex][1] = newHref;
      
      // Call the default link rule with the modified token
      return defaultLinkRule(tokens, idx, options, env, self);
    };
  
  }