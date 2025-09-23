import { useEffect, useState } from "react";
import "./App.css";
import { AudioFileComponent } from "./components/AudioFileComponent";
import { fetchFiles, getDownloadLink } from "./components/dropbox";
import type { DropboxEntry } from "./customTypes";

function App() {
    const [files, setFiles] = useState<DropboxEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return () => {};
    });

    useEffect(() => {
        fetchFiles()
            .then(setFiles)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const handleDownload = async (file: DropboxEntry) => {
        try {
            const url = await getDownloadLink(file.path_lower); // internally uses encodeURIComponent
            if (url.slice(-4) === "dl=0") window.open(url.replace("dl=0", "dl=1"), "_blank");
            else window.open(url, "_blank");
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!files.length) return <div>No files found</div>;

    return (
        <>
            {files?.map((item, index) => {
                return (
                    <div className="appHome" key={index} onClick={() => handleDownload(item)}>
                        <AudioFileComponent filePath={item.path_lower} fileName={item.name}></AudioFileComponent>
                    </div>
                );
            })}
        </>
    );
}

export default App;
