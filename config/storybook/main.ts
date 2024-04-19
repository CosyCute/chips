import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import fullReload from 'vite-plugin-full-reload';
import { configResolvers } from '../vite';

const filesReload = ['reducers/*', 'store/*', 'store.ts', 'global.d.ts'].map(
    (item: string) => path.resolve(__dirname, 'src', item),
);

const config: StorybookConfig = {
    stories: [
        '../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react-vite',

    async viteFinal(config, options) {
        const srcFolderPath = path.resolve(process.cwd(), './src');

        return mergeConfig(config, {
            resolve: configResolvers({
                src: srcFolderPath,
                dev: '',
                root: '',
                publicDir: '',
            }),
            plugin: [
                react({
                    include: '**/*.tsx',
                }),
                fullReload(filesReload),
            ],
            root: process.cwd(),
        });
    },
};
export default config;
