import styled from "styled-components";
import { media, type DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
}

const Container = styled.div<{}>`
    width: 260px;
    height: fit-content;
    background-color: #474646;
    border-radius: 10%;

    @media (${media.smallphone}) {
    }
    @media (${media.phone}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.largeDesktop}) {
    }
`;
const Wrapper = styled.div<{}>`
    width: fit-content;
    height: fit-content;
    margin: auto;
    @media (${media.smallphone}) {
    }
    @media (${media.phone}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.largeDesktop}) {
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
    @media (${media.smallphone}) {
    }
    @media (${media.phone}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.largeDesktop}) {
    }
`;
const FileName = styled.span<{}>`
    width: 250px;
    height: 24px;
    @media (${media.smallphone}) {
    }
    @media (${media.phone}) {
    }
    @media (${media.tablet}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.largeDesktop}) {
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
