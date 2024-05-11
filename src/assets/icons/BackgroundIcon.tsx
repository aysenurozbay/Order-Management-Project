import React, { SVGProps } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../../utils/colors';

interface IBackgorundIconProps {
    size?: number;
    fill?: string;
}

const BackgroundIcon = ({ size, fill = colors.black, ...props }: IBackgorundIconProps) => {
    return (
        <Svg viewBox="0 0 1440 320" {...props}>
            <Path
                fill="#c1121f"
                d="M0 320l14.1-37.3C28.2 245 56 171 85 133.3 112.9 96 141 96 169 80c28.6-16 57-48 85-21.3C282.4 85 311 171 339 213.3c28.1 42.7 56 42.7 85 5.4 27.8-37.7 56-111.7 84-117.4 28.5-5.3 57 58.7 85 69.4 28.2 10.3 56-31.7 85-16C705.9 171 734 245 762 256c28.6 11 57-43 85-64 28.3-21 57-11 85 0s56 21 84 0c28.7-21 57-75 85-106.7 28.4-32.3 57-42.3 85-53.3 28.1-11 56-21 85 10.7 27.8 32.3 56 106.3 84 122.6 28.5 15.7 57-26.3 71-48l14-21.3V0H0z"
            />
        </Svg>
    );
};
export default BackgroundIcon;
