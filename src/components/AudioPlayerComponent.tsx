import styled from "styled-components";
import { media, type DropboxFile } from "./customTypes";

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
    opacity: 0.8;
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
const AudioComponent = styled.audio<{}>`
    width: 100%;
    height: fit-content;
    margin: auto;
    max-width: 500px;

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

export const AudioPlayerComponent: React.FC<Props> = ({ file, handlePlay }) => {
    return (
        <>
            <ComponentContainer>
                <Container>
                    <Wrapper onClick={() => handlePlay(false)}>CLOSE</Wrapper>
                    <Wrapper>{file.name}</Wrapper>
                    <Wrapper>
                        <AudioComponent src={file.link.replace("dl=0", "raw=1")} controls />
                    </Wrapper>
                </Container>
            </ComponentContainer>
        </>
    );
};
