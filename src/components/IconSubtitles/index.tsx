import styled from "styled-components";

type subtitleProps = {
    title: string;
    text: string;
};

const Title = styled.h1`
    margin: 0;
    padding: 1em;
`;

const Paragraph = styled.p`
    margin: 0;
    padding: 0 1rem;
    font-size: 1.3em;
    text-align: center;
`;

function IconSubtitles(props: subtitleProps) {
    return (
        <>
            <Title>{props.title}</Title>
            <Paragraph>{props.text}</Paragraph>
        </>
    );
}

export default IconSubtitles;
