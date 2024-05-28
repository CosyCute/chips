import { UserConfig } from 'vite';

import { configBuild } from './build';
import { configPlugins } from './plugins';
import { configResolvers } from './resolvers';
import { ConfigOptions } from './types';

export const viteConfig = (options: ConfigOptions): UserConfig => {
    const { paths } = options;

    return {
        root: paths.root,
        publicDir: paths.publicDir,
        resolve: configResolvers(options.paths),
        plugins: configPlugins(),
        server: {
            open: '/home',
            port: options.port,
        },
        build: configBuild(options),
    };
};
