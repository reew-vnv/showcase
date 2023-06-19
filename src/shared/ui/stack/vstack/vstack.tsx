import { memo } from 'react';
import { Flex, FlexProps } from '../flex/flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = memo((props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" align={align} />;
});
