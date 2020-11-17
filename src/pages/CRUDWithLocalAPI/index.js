import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import UserCard from '../../components/UserCard';
import Axios from 'axios';

const CRUDWithLocalAPI = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);
    const [submit, setSubmit] = useState('save');
    const [selectedUser, setSelectedUser] = useState('');

    const onSubmit = (user) => {
        const data = {
            name, email, age
        }
        console.log(user);

        if(submit === 'save') {
            Axios.post('http://10.0.2.2:3000/users', data)
            .then(() => {
                getData();
                setName('');
                setEmail('');
                setAge('');
            })
            .catch(err => console.log(err))
        } else {
            Axios.put(`http://10.0.2.2:3000/users/${user.id}`, data)
            .then(() => {
                getData();
                setName('');
                setEmail('');
                setAge('');
                setSubmit('save');
            })
            .catch(err => console.log(err))
        }
    }

    const getData = () => {
        Axios.get('http://10.0.2.2:3000/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    }

    const editData = (user) => {
        setName(user.name);
        setEmail(user.email);
        setAge(user.age.toString());
        setSubmit('edit');
        setSelectedUser(user);
    }

    const deleteData = (user) => {
        if(submit !== 'edit') {
            Axios.delete(`http://10.0.2.2:3000/users/${user.id}`)
            .then(() => {
                getData();
            })
            .catch(err => console.log(err))
        } else {
            alert('User sedang di edit!')
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CRUD With Local API</Text>
            <View>
                <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={(value) => { setName(value) }} />
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => { setEmail(value) }} />
                <TextInput placeholder="Age" style={styles.input} value={age} onChangeText={(value) => { setAge(value) }} />
                { submit === 'save' && 
                    <Button title="Add User" onPress={onSubmit} />
                }
                { submit === 'edit' && 
                    <Button title="Edit User" onPress={() => {onSubmit(selectedUser)}} />
                }
            </View>
            <View style={{width: '100%', height: 2, backgroundColor: '#888', marginVertical: 20}}></View>
            <View>
                    {users.map( user => {
                        return <UserCard key={user.id} name={user.name} email={user.email} age={user.age} editUser={() => { editData(user) }} 
                        deleteUser={() =>
                            Alert.alert(
                                "Delete User",
                                `Are you sure to delete ${user.name}?`,
                                [
                                    {
                                    text: "Cancel"
                                    },
                                    { text: "Yes, Delete", onPress: () => { deleteData(user) }}
                                ],
                                { cancelable: false }
                                )} />
                    })}
            </View>
        </View>
    )
}

export default CRUDWithLocalAPI

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#eaeaea',
        padding: 10,
        marginBottom: 10
    }
})
