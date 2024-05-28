export type ConfigMode = 'development' | 'production';

export interface ConfigPath {
    src: string;
    publicDir: string;
    root: string;
}

export interface ConfigOptions {
    mode: ConfigMode;
    paths: ConfigPath;
    isDev: boolean;
    port: number;
}
