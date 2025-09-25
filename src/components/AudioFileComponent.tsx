import styled from "styled-components";
import { fontSizes, media, mediaSets, type DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
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

export const AudioFileComponent: React.FC<Props> = ({ file }) => {
    function getNameOrArtist(isName: boolean) {
        const fileName = file.name.substring(0, file.name.lastIndexOf("."));

        return isName ? fileName.substring(0, fileName.lastIndexOf(" - ")) : fileName.substring(fileName.lastIndexOf(" - ") + 3, fileName.length);
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <FileImg $imgUrl={file.cover ? file.cover.replace("dl=0", "dl=1") : undefined}></FileImg>
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
