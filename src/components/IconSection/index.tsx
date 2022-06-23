import styled from "styled-components";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { Monitor } from "@styled-icons/foundation/Monitor";
import { Stack } from "@styled-icons/bootstrap/Stack";
import IconSubtitles from "../IconSubtitles";

const MonitorIcon = styled(Monitor)`
    color: #1a73e8;
    height: 100px;
`;

const StackIcon = styled(Stack)`
    color: #1a73e8;
    height: 100px;
`;

const CheckIcon = styled(CheckCircle)`
    color: #1a73e8;
    height: 100px;
`;

const Wrapper = styled.section`
    padding: 8em 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
`;

const IconDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function IconSection() {
    return (
        <Wrapper>
            <IconDiv>
                <MonitorIcon />
                <IconSubtitles
                    title='Somente para desktop'
                    text='Vamos aprender como utilizar um framework'
                />
            </IconDiv>
            <IconDiv>
                <StackIcon />
                <IconSubtitles
                    title='Criado com componentes'
                    text='Utilizamos o Sytled Components'
                />
            </IconDiv>
            <IconDiv>
                <CheckIcon />
                <IconSubtitles title='Fácil aproveitamento' text='Estamos no caminho' />
            </IconDiv>
        </Wrapper>
    );
}

export default IconSection;
