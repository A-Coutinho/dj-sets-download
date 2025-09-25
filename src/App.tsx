import { useEffect, useState } from "react";
import styled from "styled-components";
import { AudioFileComponent } from "./components/AudioFileComponent";
import { InfoDisplay } from "./components/InfoDisplay";
import { media, type DropboxFile } from "./components/customTypes";
import { fetchFiles } from "./components/dropbox";

const Container = styled.div<{}>`
    margin: auto;
    padding: 0;
    text-align: center;
    width: 100%;
    height: 100vh;
`;

const ComponentUl = styled.ul<{}>`
    margin: auto;
    padding: 0;
    width: fit-content;
`;

const ComponentLi = styled.li<{}>`
    display: inline-block;
    margin: auto;
    width: fit-content;
    list-style-type: none;
    margin: 15px;

    @media (${media.largeDesktop}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.phone}) {
    }
    @media (${media.smallphone}) {
    }
`;

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

    if (loading)
        return (
            <Container>
                <InfoDisplay textToDisplay="Loading..."></InfoDisplay>
            </Container>
        );
    if (!files.length)
        return (
            <Container>
                <InfoDisplay textToDisplay="No files found"></InfoDisplay>
            </Container>
        );

    return (
        <>
            <Container>
                <ComponentUl>
                    {files?.map((item, index) => {
                        return (
                            <ComponentLi key={index}>
                                <div className="appHome" key={index} onClick={() => handleDownload(item)}>
                                    <AudioFileComponent file={item}></AudioFileComponent>
                                </div>
                            </ComponentLi>
                        );
                    })}
                </ComponentUl>
            </Container>
        </>
    );
}

export default App;
