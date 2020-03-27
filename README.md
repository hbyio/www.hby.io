
Fully documented project to be up and running with static site generator (Hugo.io) on a modern hosting solution (Netlify/Now.sh) with a clean working methodology (Git centered)

# Documentation (todo)
- [ ] Setup your environment (download IDE, create Github account)
- [ ] Clone this repo, start Hugo dev server
- [ ] Edit content, Build your website
- [ ] Create a Netlify / Now.sh account
- [ ] Publish

# Legacy
Root repository from https://github.com/budparr/hugopipes-tailwindcss

# Development
The Repo is a working example of Hugo's Pipes functionality using TailwindCSS and PurgeCSS.

- [Hugo Pipes](https://gohugo.io/hugo-pipes/)
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) (with a custom extractor for PurgeCSS)

- [PostCSS](https://github.com/postcss/postcss)
- [PurgeCSS](https://github.com/FullHuman/purgecss)
- [AutoPrefixer](https://github.com/postcss/autoprefixer)
- [PostCSS-Import](https://github.com/postcss/postcss-import) (because the importer that I think is native to Tailwind doesn't seem to work in this context)

The critical file is `/assets/css/postcss.config.js` and `/assets/css/dev/postcss.config.js`

### Deployment Notes

Hugo will not [rebuild](https://discourse.gohugo.io/t/regenerating-assets-directory-for-hugo-pipes/13175) your CSS file unless the file itself is changed. In a TailwindCSS context, most of your work occurs in templates, not in the CSS file. To make development easier, we've created a separate PostCSS [config](https://github.com/postcss/postcss-cli#config) file without PurgeCSS.

- **Before deploying, run `hugo --gc` to generate a minified, purged CSS file.** 
- Check the `resources` folder into your repository.

### Other Notes

- PurgeCSS will fail if any of your templates are empty.
- If you add themes, you need to add the file location in the PurgeCSS `content` configuration item.
