import styled from "styled-components";
import TopBanner from "../../components/TopBanner";
import IconSection from "../../components/IconSection";
import CardSection from "../../components/CardSection";
import CardText from "../../components/CardText";
import CardImage from "../../components/CardImage";
import BottomBanner from "../../components/BottomBanner";
import Footer from "../../components/Footer";

const WrapperDiv = styled.main`
    width: 100%;
    margin: 0;
    padding: 0;
`;

function Wrapper() {
    return (
        <WrapperDiv>
            <TopBanner />
            <IconSection />
            <CardSection>
                <CardText
                    title='Lorem, ipsum.'
                    text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sagittis
            tincidunt. In a elementum tortor. Aenean varius odio nex erat lacinia tempus a
            eu ante. Sed sollicitudin auctor tortor tincidunt suscipit. Curabitur eleifend,
            metus nex lacinia porttitor, leo massa feugiat ligula, eget viverra magna lorem
            in quam. Nullam porta, ipsum a egestas ornare, lectus massa semper ligula,
            consequat lobortis mi ex ut lorem. Fusce tempor iaculis magna ac laoeet. Nulla
            posuere sit amet ante sit amet venenatis. Nullam tincidunt egestas urna, vel
            aliquet turpis. Donec sem ex, ornare nex lectus vulputate, molestie vehicula
            justo.'
                />
                <CardImage
                    src='https://imagizer.imageshack.com/v2/800x800q90/923/rng99f.png'
                    alt='black cellphone against orange background'
                />
            </CardSection>
            <CardSection>
                <CardImage
                    src='https://imagizer.imageshack.com/v2/800x800q90/923/23NWhv.png'
                    alt='Code with dark background'
                />
                <CardText
                    title='Lorem, ipsum.'
                    text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sagittis
            tincidunt. In a elementum tortor. Aenean varius odio nex erat lacinia tempus a
            eu ante. Sed sollicitudin auctor tortor tincidunt suscipit. Curabitur eleifend,
            metus nex lacinia porttitor, leo massa feugiat ligula, eget viverra magna lorem
            in quam. Nullam porta, ipsum a egestas ornare, lectus massa semper ligula,
            consequat lobortis mi ex ut lorem. Fusce tempor iaculis magna ac laoeet. Nulla
            posuere sit amet ante sit amet venenatis. Nullam tincidunt egestas urna, vel
            aliquet turpis. Donec sem ex, ornare nex lectus vulputate, molestie vehicula
            justo.'
                />
            </CardSection>
            <CardSection>
                <CardText
                    title='Lorem, ipsum.'
                    text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sagittis
            tincidunt. In a elementum tortor. Aenean varius odio nex erat lacinia tempus a
            eu ante. Sed sollicitudin auctor tortor tincidunt suscipit. Curabitur eleifend,
            metus nex lacinia porttitor, leo massa feugiat ligula, eget viverra magna lorem
            in quam. Nullam porta, ipsum a egestas ornare, lectus massa semper ligula,
            consequat lobortis mi ex ut lorem. Fusce tempor iaculis magna ac laoeet. Nulla
            posuere sit amet ante sit amet venenatis. Nullam tincidunt egestas urna, vel
            aliquet turpis. Donec sem ex, ornare nex lectus vulputate, molestie vehicula
            justo.'
                />
                <CardImage
                    src='https://imagizer.imageshack.com/v2/800x800q90/924/6EFGQ1.png'
                    alt='Child playing with cubes'
                />
            </CardSection>
            <BottomBanner />
            <Footer />
        </WrapperDiv>
    );
}

export default Wrapper;
