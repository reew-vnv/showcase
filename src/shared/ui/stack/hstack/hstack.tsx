import { memo } from 'react';
import { Flex, FlexProps } from '../flex/flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = memo((props: HStackProps) => (
    <Flex {...props} direction="row" />
));
