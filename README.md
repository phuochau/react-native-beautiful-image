# react-native-beautiful-image

A beautiful image component for React Native with fade-in animation and placeholder support.

## Installation

```bash
npm install react-native-beautiful-image
# or
yarn add react-native-beautiful-image
```

## Usage

```typescript
import Image from 'react-native-beautiful-image';

// Basic usage
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
/>

// With placeholder
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  placeholderSource={require('./assets/placeholder.jpg')}
  style={{ width: 200, height: 200 }}
/>

// With callbacks
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  onLoad={() => console.log('Image loaded')}
  onError={() => console.log('Image failed to load')}
  style={{ width: 200, height: 200 }}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| source | ImageSourcePropType | Yes | The source of the image |
| style | StyleProp<ImageStyle> | No | Style for the image |
| onLoad | () => void | No | Callback when image loads successfully |
| onError | () => void | No | Callback when image fails to load |
| placeholderSource | ImageSourcePropType | No | Image to show while loading or on error |

## TypeScript Support

This library is written in TypeScript and includes type definitions. The main component is exported as:

```typescript
import Image, { ImageExtProps } from 'react-native-beautiful-image';
```

## License

MIT
