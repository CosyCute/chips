import path from 'path';
import vite from 'vite';
import { ConfigOptions } from './types';

export const configBuild = (options: ConfigOptions): vite.BuildOptions => {
    const { paths } = options;
    return {
        rollupOptions: {
            input: {
                index: path.resolve(paths.dev, 'spa.tsx'),
            },
            preserveEntrySignatures: 'strict',
            output: {
                entryFileNames: 'salesman.js',
                dir: path.join(paths.publicDir, './dist'),
            },
        },
    };
};
