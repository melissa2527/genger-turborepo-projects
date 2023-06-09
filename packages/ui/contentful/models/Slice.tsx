import styled from 'styled-components'

export type Margin = 's' | 'm' | 'l';

interface SliceProps {
    marginTop: Margin;
    marginBottom: Margin;
    children: React.ReactNode;
}

const Wrapper = styled.div<{ marginTop: Margin, marginBottom: Margin}>`
    margin-top: ${props => props.marginTop === 'l' ? '84px' : props.marginTop === 'm' ? '64px' : '32px'};
    margin-bottom: ${props => props.marginBottom === 'l' ? '84px' : props.marginBottom === 'm' ? '64px' : '32px'};
`

const Slice = ({marginTop, marginBottom, children}: SliceProps) => {
    return (
        <Wrapper marginBottom={marginBottom} marginTop={marginTop}>
            {children}
        </Wrapper>
    )
}

export default Slice;