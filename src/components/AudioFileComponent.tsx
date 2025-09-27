import styled from "styled-components";
import downloadIcon from "../assets/download.png";
import playIcon from "../assets/play.png";
import tracklistIcon from "../assets/tracklist.png";
import { fontSizes, media, mediaSets, type DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
    handlePlay: Function;
    handleTracklist: Function;
}

const Container = styled.div<{}>`
    width: fit-content;
    height: fit-content;
    border-radius: 10%;
    border: ${mediaSets.audiofileBorder};
    padding: 10px;

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
const Wrapper = styled.div<{}>`
    width: 100%;
    height: fit-content;
    margin: auto;

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
const FileImg = styled.div<{ $imgUrl: string | undefined }>`
    ${({ $imgUrl }) =>
        $imgUrl &&
        `
      background-image: url(${$imgUrl});
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;
    `}
    width: 250px;
    height: 153px;
    margin: auto;
    position: relative;
    @media (${media.largeDesktop}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.tablet}) {
        width: 199px;
        height: 117px;
    }
    @media (${media.phone}) {
        width: 181px;
        height: 106px;
    }
    @media (${media.smallphone}) {
        width: 115px;
        height: 67px;
    }
`;

const FileImgActionDivL = styled.div<{}>`
    background-image: url(${downloadIcon});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    width: 39%;
    height: 73%;
    margin: auto;
    position: absolute;
    left: 0;
    bottom: 0;
`;
const FileImgActionDivR = styled.div<{}>`
    background-image: url(${playIcon});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    width: 39%;
    height: 73%;
    position: absolute;
    right: 0;
    bottom: 0;
`;
const FileImgActionDivM = styled.div<{}>`
    background-image: url(${tracklistIcon});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    width: 39%;
    height: 73%;
    position: absolute;
    right: 31%;
    top: 0;
`;

const FileName = styled.span<{}>`
    width: 100%;
    font-size: ${fontSizes.lg};

    @media (${media.largeDesktop}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.phone}) {
        font-size: ${fontSizes.md};
    }
    @media (${media.smallphone}) {
        font-size: ${fontSizes.sm};
    }
`;

export const AudioFileComponent: React.FC<Props> = ({ file, handlePlay, handleTracklist }) => {
    function getNameOrArtist(isName: boolean) {
        const fileName = file.name.substring(0, file.name.lastIndexOf("."));

        return isName ? fileName.substring(0, fileName.lastIndexOf(" - ")) : fileName.substring(fileName.lastIndexOf(" - ") + 3, fileName.length);
    }

    const handleDownload = async (file: DropboxFile) => {
        try {
            if (file.link.slice(-4) === "dl=0") window.open(file.link.replace("dl=0", "dl=1"), "_blank");
            else window.open(file.link, "_blank");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Container>
                <Wrapper>
                    <FileImg $imgUrl={file.cover ? file.cover.replace("dl=0", "dl=1") : undefined}>
                        <FileImgActionDivL onClick={() => handleDownload(file)}></FileImgActionDivL>
                        <FileImgActionDivM onClick={() => handleTracklist(true, file)}></FileImgActionDivM>
                        <FileImgActionDivR onClick={() => handlePlay(true, file)}></FileImgActionDivR>
                    </FileImg>
                </Wrapper>
                <Wrapper>
                    <FileName>{getNameOrArtist(true)}</FileName>
                </Wrapper>
                <Wrapper>
                    <FileName>{getNameOrArtist(false)}</FileName>
                </Wrapper>
            </Container>
        </>
    );
};
