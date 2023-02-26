import { StaticImageData } from "next/image";
import styled from 'styled-components'

interface TestimonialProps {
    quote: string;
    author: string;
    // link?: string;
    // heading?: string;
    quoteBackgroundImage?: StaticImageData['src'];
    fontColor?: 'white' | 'black'
}

const Wrapper = styled.div<{ fontColor: string, quoteBackgroundImage: StaticImageData['src']}>`
    background: ${props => props.quoteBackgroundImage ? props.quoteBackgroundImage : 'red'};
    color: ${props => props.fontColor  === 'black' ? '#1f1e1e' : '#fff'};
`

const Testimonial = ({quote, author, quoteBackgroundImage, fontColor = 'black'}: TestimonialProps) => {
    return (
        <Wrapper fontColor={fontColor} quoteBackgroundImage={quoteBackgroundImage ? quoteBackgroundImage : ''}>
            <div>{quote}</div>
            <div>{author}</div>
        </Wrapper>
    )
}

export default Testimonial;