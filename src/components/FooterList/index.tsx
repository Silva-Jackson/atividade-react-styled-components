import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 3em;
    width: 100%;
`;

const StyledUl = styled.ul`
    padding-left: 0;
    margin: 0;
`;

const StyledLi = styled.li`
    display: inline;
    color: #555;
    font-size: 0.8em;
`;

const StyledLink = styled.a`
    color: #1a73e8;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1rem;
`;

const StyledP = styled.p`
    color: #555;
    padding-left: 1rem;
`;

export default function FooterList() {
    return (
        <StyledDiv>
            <StyledUl>
                <StyledLi>
                    <StyledLink href=''>About</StyledLink> &bull;
                </StyledLi>
                <StyledLi>
                    <StyledLink href=''>Contact</StyledLink> &bull;
                </StyledLi>
                <StyledLi>
                    <StyledLink href=''>Terms of Use</StyledLink> &bull;
                </StyledLi>
                <StyledLi>
                    <StyledLink href=''>Privacy Policy</StyledLink>
                </StyledLi>
            </StyledUl>
            <StyledP>&copy; Your Website 2020. All Rights Reserved.</StyledP>
        </StyledDiv>
    );
}
