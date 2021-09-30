import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState(['task 1', 'task 2'])

  const handleAddTask = ()=>{
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask('')
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* this is where my tasks will go  */}
          {
            taskItems.map((item, index)=>{
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}></Task>
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={"Buy Groceries"}/>
          <Task text={"Study for a test"}/>
          <Task text={"Go out for dinner"}/> */}
        </View>
      </View>

      {/* WRITE A TASK */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :"heiht"} style={styles.writeTaskManager}>
        <TextInput style={styles.input} placeholder={"Write a task..."} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View> 
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',

  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold"
  },
  items:{
    marginTop: 30
  },
  writeTaskManager:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText:{},
});
