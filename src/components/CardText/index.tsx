import styled from "styled-components";

export type TextProps = {
    title: string;
    text: string;
};
export const TextCard = styled.div`
    width: 50%;
    background-color: #fff;
`;
export const Title = styled.h1`
    padding: 4rem 3em 0;
    font-size: 2rem;
    margin: 0 0 1rem;
`;

export const Paragraph = styled.p`
    font-size: 1.2em;
    padding: 0 5em;
    margin: 0;
`;

function CardText(props: TextProps) {
    return (
        <TextCard>
            <Title>{props.title}</Title>
            <Paragraph>{props.text}</Paragraph>
        </TextCard>
    );
}

export default CardText;
