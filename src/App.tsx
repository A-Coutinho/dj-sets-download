import { useEffect, useState } from "react";
import "./App.css";
import { AudioFileComponent } from "./components/AudioFileComponent";
import type { DropboxFile } from "./components/customTypes";
import { fetchFiles } from "./components/dropbox";

function App() {
    const [files, setFiles] = useState<DropboxFile[]>([]);
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

    const handleDownload = async (file: DropboxFile) => {
        try {
            if (file.link.slice(-4) === "dl=0") window.open(file.link.replace("dl=0", "dl=1"), "_blank");
            else window.open(file.link, "_blank");
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
                        <AudioFileComponent file={item}></AudioFileComponent>
                    </div>
                );
            })}
        </>
    );
}

export default App;
