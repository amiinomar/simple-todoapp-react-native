import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Alert, FlatList } from 'react-native';
import ListItemTask from './components/ListItemTask';
import CustomButton from './components/CustomButton';

export default function App() {
    const [textInput, setTextInput] = useState('')
    const [listTask, setListTask] = useState([])

    const onAddHandler = () => {
        if (textInput === '') {
            Alert.alert('Error', 'Task name is required!')
            return
        }
        
        setListTask(current => {
            return [...current, textInput]
        })
        setTextInput('')
    }

    const onDeleteHandler = (index) => {
        setListTask(current => current.filter((task, i) => i !== index))
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                // source={require('./assets/bg.jpg')} 
                source={{ uri: 'https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png' }}
                resizeMode="contain" 
                style={styles.container}
                imageStyle={styles.imageBg}>
                <View style={{
                    marginVertical: 10,
                    paddingVertical: 10,
                    borderBottomWidth: 4,
                    borderBottomColor: "#CCC",
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#256D85'
                    }}>Todo App</Text>
                </View>
                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            flex: 1,
                            borderRadius: 8,
                            fontSize: 16,
                            padding: 12,
                            minWidth: 200
                        }}
                        onChangeText={(text) => setTextInput(text)}
                        value={textInput}
                        placeholder="Input task name ..." />
                    <View 
                        style={{ 
                            marginLeft: 8,
                        }}>
                        <CustomButton 
                            icon="plus-circle-outline"
                            color={"#3890ab"} 
                            onPress={onAddHandler}>
                            Add
                        </CustomButton>
                    </View>
                </View>
                <FlatList
                    data={listTask}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <ListItemTask 
                            task={item} 
                            number={index+1} 
                            // onPress={() => onDeleteHandler(index)}
                            onPress={onDeleteHandler.bind(this, index)} 
                        />
                    )} />
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBg: {
        opacity: 0.15
    }
});
