import { UserConfig } from 'vite';

import { ConfigOptions } from './types';
import { configResolvers } from './resolvers';
import { configPlugins } from './plugins';
import { configBuild } from './build';

export const viteConfig = (options: ConfigOptions): UserConfig => {
    const { paths } = options;

    return {
        root: paths.root,
        publicDir: paths.publicDir,
        resolve: configResolvers(options.paths),
        plugins: configPlugins(),
        server: {
            port: options.port,
        },
        build: configBuild(options),
    };
};
