import styled from 'styled-components';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Gutter = 'none' | 'sm' | 'md' | 'lg';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  gutter?: Gutter;
  fontColor?: string;
  as?: HeadingTypes;
  size?: Size;
  lineHeight?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export declare const HeadingBase: ({ as, fontFamily, size, fontWeight, lineHeight, ...rest }: HeadingProps) => JSX.Element;

const StyledHeading = styled(HeadingBase)<HeadingProps>`
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.2)};
  color: ${(props) => (props.fontColor ? props.fontColor : '#000')};
  margin-bottom: ${(props) => `var(--space-${props.gutter})`};
`;

const Heading = ({
  gutter,
  fontColor,
  as = 'h1',
  size,
  ...props
}: HeadingProps): React.ReactElement => {
  return (
    <StyledHeading
      gutter={gutter}
      size={size}
      fontColor={fontColor}
      as={as}
      {...props}
    />
  );
};

export default Heading;