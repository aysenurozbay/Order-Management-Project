import React from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../../utils/colors';

interface IBasketIconProps {
    size?: number;
    fill?: string;
}

const BasketIcon = ({ size, fill = colors.black, ...props }: IBasketIconProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 14 14">
            <Path
                fill={fill}
                fillRule="evenodd"
                d="M4 6.5H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m4-4.25a.75.75 0 0 0 0 1.5h.75v6.961a2.501 2.501 0 0 1 4.244 1.958C13.621 12.449 14 11.806 14 11c0-1.927-1.58-3.621-3.75-3.743v-.958c.22.128.477.201.75.201h1a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-1c-.273 0-.53.073-.75.2V3a.75.75 0 0 0-.75-.75zm.01 10.5a2.49 2.49 0 0 1 .321-1.5H8.25a.75.75 0 0 1-.75-.75V10a2.75 2.75 0 0 0-2.75-2.75h-2A2.75 2.75 0 0 0 0 10v2c0 .414.336.75.75.75h.26a2.501 2.501 0 1 1 4.977 0zm-6.012-.251a1.501 1.501 0 1 0 3.002 0a1.501 1.501 0 0 0-3.002 0m7 0a1.501 1.501 0 1 0 3.002 0a1.501 1.501 0 0 0-3.002 0"
                clipRule="evenodd"
            />
        </Svg>
    );
};
export default BasketIcon;
