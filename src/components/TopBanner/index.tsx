import styled from "styled-components";

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: white;
    font-family: sans-serif;
`;

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12em 0;
    background: #ccc;
`;

function TopBanner() {
    return (
        <Wrapper>
            <Title>Minha primeira página com React</Title>
        </Wrapper>
    );
}

export default TopBanner;
