import styled from "styled-components";

export type ImgProps = {
    src: string;
    alt: string;
};

export const CardImg = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

function CardImage(props: ImgProps) {
    return (
        <CardImg>
            <img src={props.src} alt={props.alt} width='100%' />
        </CardImg>
    );
}

export default CardImage;
