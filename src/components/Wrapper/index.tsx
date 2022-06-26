import TopBanner from "../../components/TopBanner";
import IconSection from "../../components/IconSection";
import CardSection from "../../components/CardSection";
import CardText from "../../components/CardText";
import CardImage from "../../components/CardImage";
import BottomBanner from "../../components/BottomBanner";
import Footer from "../../components/Footer";
import Child from "../../assets/images/child.png";
import Phone from "../../assets/images/phone.png";
import Code from "../../assets/images/code.png";
import "./index.css";

function Wrapper() {
    return (
        <main id='light'>
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
                <CardImage src={Phone} alt='black cellphone against orange background' />
            </CardSection>
            <CardSection>
                <CardImage src={Code} alt='Code with dark background' />
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
                <CardImage src={Child} alt='Child playing with cubes' />
            </CardSection>
            <BottomBanner />
            <Footer />
        </main>
    );
}

export default Wrapper;
