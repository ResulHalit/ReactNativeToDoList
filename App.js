import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Daily Tasks*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.SectionTitle}>Today's Tasks</Text>
      <View style={styles.item}>
          {/*Item Section */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Tasks text={item}/>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
      {/*wRİTE A TASK */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput 
        style={styles.input} 
        placeholder={'Write a Task'} 
        value={task} 
        onChangeText={text => setTask(text)} 
        />

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  SectionTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  item:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  }
});
