import styled from "styled-components";
import { Gradient, Wrapper } from "../TopBanner";

const Title = styled.h1`
    width: 100%;
    padding: 3em 0;
    font-size: 2em;
    text-align: center;
    color: white;
    font-family: sans-serif;
`;

function BottomBanner() {
    return (
        <Wrapper>
            <Gradient>
                <Title>Contato</Title>
            </Gradient>
        </Wrapper>
    );
}

export default BottomBanner;
