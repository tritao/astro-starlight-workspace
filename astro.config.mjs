// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkDirective from 'remark-directive';
import remarkSymbolDirectives from './packages/plugins/remark-symbol-directives';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkDirective, remarkSymbolDirectives],
	},
	integrations: [
		starlight({
			customCss: [
				'./packages/plugins/remark-symbol-directives/styles.css'
			],
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
