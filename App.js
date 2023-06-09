import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import Task from "./componentes/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleaddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
     {/*Afazeres de hoje*/}
     <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Afazeres de Hoje</Text>

      <View style={styles.itens}>
      {/*Aqui onde seus afazerem irão aparecer*/}
        {
          taskItems.map((item, index)=>{
            return (
           <TouchableOpacity onPress={() => completeTask(index)}>
           <Task key={index} text={item}/>
           </TouchableOpacity>
              
            )
            
           
          })
        }
        
      
      
      </View> 

     </View>

     {/*Escreva seus afazeres*/ }
     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Escreva um afazer'} value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleaddTask()}>
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
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },

  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'
  },

  itens: {
    marginTop:30,
  },

  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical:15,
    paddingLeft:20,
    paddingHorizontal:15,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,

  },
  addText: {},

});
