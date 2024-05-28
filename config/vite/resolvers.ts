import path from 'path';
import vite, { ResolveOptions } from 'vite';

import { ConfigPath } from './types';

export const configResolvers = (
    paths: ConfigPath,
): ResolveOptions & { alias?: vite.AliasOptions } => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.d.ts'],
        alias: [
            { find: 'app', replacement: path.resolve(paths.src, 'app') },
            {
                find: 'entities',
                replacement: path.resolve(paths.src, 'entities'),
            },
            {
                find: 'features',
                replacement: path.resolve(paths.src, 'features'),
            },
            { find: 'pages', replacement: path.resolve(paths.src, 'pages') },
            { find: 'shared', replacement: path.resolve(paths.src, 'shared') },
            {
                find: 'widgets',
                replacement: path.resolve(paths.src, 'widgets'),
            },
        ],
    };
};
