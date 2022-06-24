import styled from "styled-components";
import { Facebook } from "@styled-icons/fa-brands/Facebook";
import { TwitterSquare } from "@styled-icons/fa-brands/TwitterSquare";
import { Instagram } from "@styled-icons/fa-brands/Instagram";

const FacebookIcon = styled(Facebook)`
    color: #1a73e8;
    height: 30px;
    margin: 0 1em;
`;

const TwitterIcon = styled(TwitterSquare)`
    color: #1a73e8;
    height: 30px;
    margin: 0 1em;
`;

const InstagramIcon = styled(Instagram)`
    color: #1a73e8;
    height: 30px;
    margin: 0 1em;
`;

const IconDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function FooterLinks() {
    return (
        <>
            <IconDiv>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </IconDiv>
        </>
    );
}

export default FooterLinks;
