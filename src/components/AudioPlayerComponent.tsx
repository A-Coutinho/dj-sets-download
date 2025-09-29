import styled from "styled-components";
import closeIcon from "../assets/cross.png";
import { fontSizes, media, type DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
    handlePlay: Function;
}

const ComponentContainer = styled.div<{}>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: white;
    opacity: 0.95;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: grid;

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

const Container = styled.div<{}>`
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
const Wrapper = styled.div<{}>`
    width: 100%;
    height: fit-content;
    margin: auto;
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
const AudioComponent = styled.audio<{}>`
    width: 700px;
    margin: 25px auto;
    max-width: 700px;

    @media (${media.largeDesktop}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.tablet}) {
        margin: 20px auto;
        width: 95%;
    }
    @media (${media.phone}) {
        width: 95%;
        margin: 15px 0;
    }
    @media (${media.smallphone}) {
        width: 95%;
        margin: 10px 0;
    }
`;
const CloseIcon = styled.div<{}>`
    width: 45px;
    aspect-ratio: 1 / 1;
    margin: 25px auto;
    background-image: url(${closeIcon});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;

    @media (${media.largeDesktop}) {
    }
    @media (${media.desktop}) {
    }
    @media (${media.tablet}) {
        margin: 20px auto;
    }
    @media (${media.phone}) {
        margin: 15px auto;
    }
    @media (${media.smallphone}) {
        margin: 10px auto;
    }
`;

export const AudioPlayerComponent: React.FC<Props> = ({ file, handlePlay }) => {
    return (
        <>
            <ComponentContainer>
                <Container>
                    <Wrapper>
                        <CloseIcon onClick={() => handlePlay(false)}></CloseIcon>
                    </Wrapper>
                    <Wrapper>{file.name}</Wrapper>
                    <Wrapper>
                        <AudioComponent src={file.link.replace("dl=1", "raw=1").replace("dl=0", "raw=1")} controls />
                    </Wrapper>
                </Container>
            </ComponentContainer>
        </>
    );
};
