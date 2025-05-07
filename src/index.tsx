import React, { Component } from 'react';
import { Animated, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export interface ImageExtProps {
  style?: StyleProp<ImageStyle>;
  onLoad?: () => void;
  onError?: () => void;
  source: ImageSourcePropType;
  placeholderSource?: ImageSourcePropType;
  [key: string]: any; // for other Image props
}

interface ImageExtState {
  opacity: Animated.Value;
  source: ImageSourcePropType;
}

export default class ImageExt extends Component<ImageExtProps, ImageExtState> {
  constructor(props: ImageExtProps) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      source: props.source,
    };
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  onError = () => {
    const { placeholderSource, onError } = this.props;
    if (onError) onError();
    if (placeholderSource) {
      this.setState({ source: placeholderSource });
    }
  }

  render() {
    const { source } = this.state;
    const { style, ...rest } = this.props;
    
    return (
      <Animated.Image
        {...rest}
        source={source}
        onLoad={this.onLoad}
        onError={this.onError}
        style={[style, { opacity: this.state.opacity }]}
      />
    );
  }
} 