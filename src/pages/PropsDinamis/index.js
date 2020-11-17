import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{margin: 5}}>
      <Image source={{uri: props.imageSource}} style={styles.storyImage} />
      <Text style={styles.storyText}>{props.storyText}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.title}>Props Dinamic Component</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Naruto"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Kakashi"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Hinata"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Yondaime"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Ryoma"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Luffy"
          />
          <Story
            imageSource="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"
            storyText="Hello Sanji"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  storyText: {
    textAlign: 'center',
    maxWidth: 75,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
});
