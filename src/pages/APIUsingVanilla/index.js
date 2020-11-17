import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const APIUsingVanilla = () => {
  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  const [userJob, setUserJob] = useState({
    name: '',
    job: '',
  });
  // useEffect(() => {
  // GET data from https://reqres.in/
  // fetch('https://reqres.in/api/users/2')
  // .then(res => res.json())
  // .then(json => console.log(json));

  // POST data to https://reqres.in/
  // fetch('https://reqres.in/api/users', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         name: "morpheus",
  //         job: "leader"
  //     })
  // })
  // .then(res => res.json())
  // .then(json => console.log(json))
  // }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setUser(json.data);
      });
  };

  const postData = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'morpheus',
        job: 'leader',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setUserJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn To Call API Using Vanilla JS</Text>
      <Text style={styles.subtitle}>Get User Data</Text>
      <Button title="GET DATA" onPress={getData} />
      <View style={{marginTop: 10}}>
        {user.avatar !== '' && (
          <Image source={{uri: user.avatar}} style={styles.avatar} />
        )}
        <Text>{`${user.first_name} ${user.last_name}`}</Text>
        <Text>{user.email}</Text>
      </View>
      <Text style={styles.subtitle}>Post User Data</Text>
      <Button title="POST DATA" onPress={postData} />
      {userJob.name !== '' && (
        <View style={{marginTop: 10}}>
          <Text>Name : {userJob.name}</Text>
          <Text>Job : {userJob.job}</Text>
        </View>
      )}
    </View>
  );
};

export default APIUsingVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
