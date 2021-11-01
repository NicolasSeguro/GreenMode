import { Image, StyleSheet, View } from 'react-native';

import React from 'react';
import { maps } from '../../utils/maps';

const MapPreview = ({ location, style, children }) => {
  const loc = location || {}
  console.log(location);
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
      center=${loc.lat},${loc.lng}
      &zoom=13
      &size=600x300
      &maptype=roadmap
      &markers=color:blue%7Clabel:S%7C${loc.lat},${loc.lng}
      &key=${maps}`;

  return (
    <View style={{ ...styles.mapPreview, ...style }}>
      {location
        ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
        : children
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: { 
    width: '100%',
    height: '100%',
  }
});

export default MapPreview;