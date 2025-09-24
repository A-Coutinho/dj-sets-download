import styled from "styled-components";
import type { DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
}

const Container = styled.div<{}>`
    width: 260px;
    height: 177px;
    @media (max-width: 999px) {
    }
`;
const Wrapper = styled.div<{}>`
    width: fit-content;
    height: fit-content;
    margin: auto;
    @media (max-width: 999px) {
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
    @media (max-width: 999px) {
    }
`;
const FileName = styled.span<{}>`
    width: 250px;
    height: 24px;
    @media (max-width: 999px) {
    }
`;

export const AudioFileComponent: React.FC<Props> = ({ file }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <FileImg $imgUrl={file.cover ? file.cover.replace("dl=0", "dl=1") : undefined}></FileImg>
                </Wrapper>
                <Wrapper>
                    <FileName>{file.name.substring(0, file.name.lastIndexOf("."))}</FileName>
                </Wrapper>
            </Container>
        </>
    );
};
