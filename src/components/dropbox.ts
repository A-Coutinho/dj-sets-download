import type { DropboxFile } from "./customTypes";

const BASE_URL = "https://multiple-fast-api.fly.dev";

export async function fetchFiles(): Promise<DropboxFile[]> {
    const res = await fetch(`${BASE_URL}/files`);
    if (!res.ok) throw new Error(`Error fetching files: ${res.statusText}`);
    const data: DropboxFile[] = await res.json();

    // Keep only files that are marked as downloadable
    return data.filter((file) => file.is_downloadable).sort((a, b) => a.name.localeCompare(b.name));
}
