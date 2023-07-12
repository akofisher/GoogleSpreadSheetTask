import React from 'react';
import { View, Text, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PieGraph = ({ data }: any) => {
    const total = data.slice(1).reduce((sum: number, percentage: string) => sum + parseInt(percentage), 0);
    let startAngle = 0;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const renderSlice = (percentage: string, index: any) => {
        const slicePercentage = parseInt(percentage);
        const endAngle = startAngle + (slicePercentage / total) * 2 * Math.PI;

        // Generate a random color for the slice
        const color = getRandomColor();

        // Calculate the coordinates of the slice's arc
        const x1 = Math.cos(startAngle);
        const y1 = Math.sin(startAngle);
        const x2 = Math.cos(endAngle);
        const y2 = Math.sin(endAngle);

        // Create the SVG path for the slice
        const pathData = `M 0 0 L ${x1} ${y1} A 1 1 0 ${endAngle - startAngle > Math.PI ? 1 : 0} 1 ${x2} ${y2} Z`;

        // Update the start angle for the next slice
        startAngle = endAngle;

        return { pathData, color, percentage: slicePercentage };
    };

    const slices = data.slice(1).map(renderSlice);

    const viewBox = `-1.2 -1.2 2.4 2.4`; // Adjust the viewBox for proper scaling

    return (
        <View>
            <Svg width={200} height={200} viewBox={viewBox}>
                {slices.map((slice: { pathData: string | undefined; color: ColorValue | undefined; }, index: React.Key | null | undefined) => (
                    <Path key={index} d={slice.pathData} fill={slice.color} />
                ))}
            </Svg>
            <View>
                {slices.map((slice: { color: any; percentage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: slice.color,
                                marginRight: 5,
                                borderRadius: 5,
                            }}
                        />
                        <Text>{slice.percentage}%</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default PieGraph;
