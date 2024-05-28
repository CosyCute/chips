import react from '@vitejs/plugin-react';
import path from 'path';
import vite from 'vite';
import analyzer from 'vite-bundle-analyzer';
import checker from 'vite-plugin-checker';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import fullReload from 'vite-plugin-full-reload';
import svgr from 'vite-plugin-svgr';

const vitePageReload = ['reducers/*', 'store/*', 'store.ts', 'global.d.ts'];
const filesReload = vitePageReload.map((item: string) =>
    path.resolve(__dirname, 'src', item),
);
export const configPlugins = (): vite.PluginOption[] => {
    return [
        react({
            include: '**/*.tsx',
        }),
        cssInjectedByJsPlugin(),
        fullReload(filesReload),
        checker({ typescript: false }),
        svgr(),
        analyzer({
            analyzerMode: 'server',
            openAnalyzer: false,
        }),
    ];
};
