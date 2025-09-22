import styled from "styled-components";
import imgUrl from "./../assets/artworkNew.png";

interface Props {
    fileName: string;
    filePath: string;
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
const FileImg = styled.div<{}>`
    background-image: url(${imgUrl});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
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

function audioClick(pathF: string) {
    console.log(pathF);
}

export const AudioFileComponent: React.FC<Props> = ({ fileName, filePath }) => {
    return (
        <>
            <Container onClick={(event) => audioClick(filePath)}>
                <Wrapper>
                    <FileImg></FileImg>
                </Wrapper>
                <Wrapper>
                    <FileName>{fileName}</FileName>
                </Wrapper>
            </Container>
        </>
    );
};
