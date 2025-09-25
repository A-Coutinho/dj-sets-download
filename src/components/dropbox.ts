import type { DropboxFile } from "./customTypes";

const BASE_URL = "https://multiple-fast-api.fly.dev";

export async function fetchFiles(): Promise<DropboxFile[]> {
    const res = await fetch(`${BASE_URL}/files`);
    if (!res.ok) throw new Error(`Error fetching files: ${res.statusText}`);
    const data: DropboxFile[] = await res.json();

    // Keep only files that are marked as downloadable
    return data.filter((file) => file.is_downloadable);
}

export async function getDownloadLink(path: string): Promise<string> {
    const url = `${BASE_URL}/download?path=${encodeURIComponent(path)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error fetching download link: ${res.statusText}`);
    const data = await res.json();

    return data.url;
}
