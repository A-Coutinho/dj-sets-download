import { Dropbox } from "dropbox";
import { useEffect } from "react";
import "./App.css";
import { AudioFileComponent } from "./components/AudioFileComponent";
const dbx = new Dropbox({ accessToken: import.meta.env.VITE_SOME_KEY });

function App() {
    useEffect(() => {
        dbx.filesListFolder({ path: "" })
            .then(function (response) {
                console.log(response.result.entries);
            })
            .catch(function (error) {
                console.error(error);
            });
        return () => {};
    }, []);

    useEffect(() => {
        return () => {};
    });
    return (
        <>
            <div className="appHome">
                <AudioFileComponent
                    key={0}
                    filePath="https://www.dropbox.com/scl/fi/dgk30w79nu2b6aasjujfa/Michael-Larkin-Larkination-2025.01.mp3?rlkey=7x099y62l6661jw6nbc5ifufn&dl=1"
                    fileName="Michael Larkin - Larkination 2025.01"></AudioFileComponent>
            </div>
        </>
    );
}

export default App;
