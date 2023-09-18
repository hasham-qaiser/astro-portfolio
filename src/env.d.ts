// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly SPOTIFY_REFRESH_TOKEN: string;
	readonly SPOTIFY_CLIENT_ID: string;
	readonly SPOTIFY_CLIENT_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
