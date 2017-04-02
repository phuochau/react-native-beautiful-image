import React, { Component, PropTypes } from 'react';
import {
  Animated,
} from 'react-native';

export default class ImageExt extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.object]),
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    placeholderSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  }

  constructor(...props) {
    super(...props);
    this.state = {
      opacity: new Animated.Value(0),
      source: this.props.source,
    };
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
    }).start();

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  onError = () => {
    const { placeholderSource } = this.props;
    if (this.props.onError) this.props.onError();
    if (placeholderSource) {
      this.setState({ source: placeholderSource });
    }
  }

  render() {
    const { source } = this.state;
    return <Animated.Image {...this.props}
      source={source}
      onLoad={this.onLoad}
      onError={this.onError}
      style={[this.props.style, { opacity: this.state.opacity }]} />;
  }
}
