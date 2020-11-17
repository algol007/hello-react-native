import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

const UserCard = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={styles.cardWrapper}>
        <Image
          source={{
            uri: `https://api.hello-avatar.com/adorables/200/${props.email}`,
          }}
          style={styles.avatar}
        />
        <View style={{marginLeft: 10}}>
          <Text>{props.name}</Text>
          <Text>{props.email}</Text>
          <Text>{props.age} Tahun</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={props.editUser}>
          <Text style={styles.buttonEdit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.deleteUser}>
          <Text style={styles.buttonDelete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '95%',
    marginBottom: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  buttonEdit: {
    backgroundColor: 'orange',
    color: '#fff',
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonDelete: {
    backgroundColor: 'red',
    color: '#fff',
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
