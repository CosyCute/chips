import { defineConfig, UserConfig } from 'vite';
import path from 'path';
import { ConfigMode, ConfigPath, viteConfig } from './config';

const rootPath = process.cwd();

export default defineConfig(async (): Promise<UserConfig> => {
    const mode = (process.env.NODE_ENV || 'development') as ConfigMode;
    const PORT = Number(process.env.PORT) || 8080;
    const isDev = mode === 'development';
    const paths: ConfigPath = {
        src: path.resolve(rootPath, 'src'),
        dev: path.resolve(rootPath, '.dev'),
        publicDir: path.resolve(rootPath, 'public'),
        root: rootPath,
    };

    return viteConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
});
