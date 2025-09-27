import styled from "styled-components";
import { fontSizes, media, type DropboxFile } from "./customTypes";

interface Props {
    file: DropboxFile;
    handleTracklist: Function;
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
const TracklistText = styled.pre<{}>`
    width: fit-content;
    margin: auto;
    text-align: left;
`;

export const TracklistComponent: React.FC<Props> = ({ file, handleTracklist }) => {
    return (
        <>
            <ComponentContainer>
                <Container>
                    <Wrapper onClick={() => handleTracklist(false)}>CLOSE</Wrapper>
                    <Wrapper>{file.name}</Wrapper>
                    <Wrapper>
                        <TracklistText>{file.tracklist!}</TracklistText>
                    </Wrapper>
                </Container>
            </ComponentContainer>
        </>
    );
};
