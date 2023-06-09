import styled from 'styled-components'

export type Alignment = 'left' | 'center' | 'right';

//create paragraph component with props
interface ParagraphProps {
    fontColor: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    fontFamily: string;
    textAlign: Alignment;
    gutter: string; 
}

//create styled component
const StyledParagraph = styled.p<ParagraphProps>`å
    color: ${props => props.fontColor ? props.fontColor : '#000'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    line-height: ${props => props.lineHeight ? props.lineHeight : '1.5'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};`

//pass props to styled component
const Paragraph = ({fontColor, fontSize, fontFamily, textAlign, gutter, ...props}: ParagraphProps): React.ReactElement => {
    return (
        <StyledParagraph 
        fontColor={fontColor} 
        fontSize={fontSize} 
       fontFamily={fontFamily} textAlign={textAlign} 
       gutter={gutter}
       {...props}/>
    )
}

export default Paragraph;
