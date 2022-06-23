import styled from "styled-components";

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: white;
    font-family: sans-serif;
`;

const Wrapper = styled.section`
    width: 100%;
    padding: 8em 0;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function BottomBanner() {
    return (
        <Wrapper>
            <Title>Minha primeira página com React</Title>
        </Wrapper>
    );
}

export default BottomBanner;
