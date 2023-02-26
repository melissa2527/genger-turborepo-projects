import styled from 'styled-components'

export type size = 's' | 'm' | 'l';

interface SliceProps {
    marginTop: size;
    marginBottom: size;
    children: React.ReactNode;
}

const Wrapper = styled.div<{ marginTop: size, marginBottom: size}>`
    margin-top: ${props => props.marginTop === 'l' ? '84px' : props.marginTop === 'm' ? '64px' : '32px'};
    margin-bottom: ${props => props.marginBottom === 'l' ? '84px' : props.marginBottom === 'm' ? '64px' : '32px'};
`

const Testimonial = ({marginTop, marginBottom, children}: SliceProps) => {
    return (
        <Wrapper marginBottom={marginBottom} marginTop={marginTop}>
            {children}
        </Wrapper>
    )
}

export default Testimonial;