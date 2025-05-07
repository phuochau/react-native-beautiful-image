import React, { Component } from 'react';
import { Animated, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
export interface ImageExtProps {
    style?: StyleProp<ImageStyle>;
    onLoad?: () => void;
    onError?: () => void;
    source: ImageSourcePropType;
    placeholderSource?: ImageSourcePropType;
    [key: string]: any;
}
interface ImageExtState {
    opacity: Animated.Value;
    source: ImageSourcePropType;
}
export default class ImageExt extends Component<ImageExtProps, ImageExtState> {
    constructor(props: ImageExtProps);
    onLoad: () => void;
    onError: () => void;
    render(): React.JSX.Element;
}
export {};
