import styled from "styled-components";

const Title = styled.h1`
    padding: 6em 0;
    font-size: 2em;
    text-align: center;
    color: white;
    font-family: sans-serif;
`;

export const Gradient = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#666, #666a);
`;

export const Wrapper = styled.section`
    width: 100%;
    background-image: url(https://imagizer.imageshack.com/img922/1324/oiUz4K.jpg);
    background-size: cover;
`;

function TopBanner() {
    return (
        <Wrapper>
            <Gradient>
                <Title>Minha primeira página com React</Title>
            </Gradient>
        </Wrapper>
    );
}

export default TopBanner;
