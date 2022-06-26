import styled from "styled-components";
import FooterLinks from "../FooterLinks";
import FooterList from "../FooterList";

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

function Footer() {
    return (
        <StyledSection>
            <FooterList />
            <FooterLinks />
        </StyledSection>
    );
}

export default Footer;
