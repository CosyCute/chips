import path from 'path';
import vite from 'vite';

import { ConfigOptions } from './types';

export const configBuild = (options: ConfigOptions): vite.BuildOptions => {
    const { paths } = options;
    return {
        rollupOptions: {
            input: {
                index: path.resolve(paths.src, 'index.tsx'),
            },
            preserveEntrySignatures: 'strict',
            output: {
                entryFileNames: 'frontend.js',
                dir: path.join(paths.publicDir, './dist'),
            },
        },
    };
};
