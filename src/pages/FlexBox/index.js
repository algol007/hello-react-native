import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('ini constructor');
    this.state = {
      subscriber: 200,
    };
  }

  componentDidMount() {
    console.log('ini component did mount');
    setTimeout(() => {
      this.setState({
        subscriber: 400,
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('ini component did update');
  }

  componentWillUnmount() {
    console.log('ini component will unmount');
  }

  render() {
    return (
      <View style={{marginBottom: 30}}>
        <Text
          style={{fontWeight: 'bold', textAlign: 'center', marginBottom: 5}}>
          FLEXBOX COMPONENT
        </Text>
        <View
          style={{
            backgroundColor: '#ccc',
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://avatars1.githubusercontent.com/u/13137672?s=460&u=a8db2fd145700925efb77b9bdc4ddd4da5955027&v=4',
            }}
            style={{width: 100, height: 100, borderRadius: 50, margin: 5}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>Ady Rahmansyah</Text>
            <Text>{this.state.subscriber} ribu Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
