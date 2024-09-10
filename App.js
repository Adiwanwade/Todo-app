import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
  event,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  
  } from "react-native";
  import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("Aditya");
  const [age, setAge] = useState(20);
  const [people, setPeople] = useState([
    // { name: "Aditya", key: "1" },
    // { name: "Himangi", key: "2" },
    // { name: "Sakshi", key: "3" },
    // { name: "Neha", key: "4" },
    // { name: "Khushali", key: "5" },
    // { name: "Pari", key: "6" },
    // { name: "Sanskar", key: "7" },
    // { name: "Anushree", key: "8" },
    // { name: "Prajakta", key: "9" },
    // { name: "Pooja", key: "10" },
    // { name: "Shagun", key: "11" },
    // { name: "Dimple", key: "12" },
    { name: "Aditya", id: "1" },
    { name: "Himangi", id: "2" },
    { name: "Sakshi", id: "3" },
    { name: "Neha", id: "4" },
    { name: "Khushali", id: "5" },
    { name: "Pari", id: "6" },
    { name: "Sanskar", id: "7" },
    { name: "Anushree", id: "8" },
    { name: "Prajakta", id: "9" },
    { name: "Pooja", id: "10" },
    { name: "Shagun", id: "11" },
    { name: "Dimple", id: "12" },
  ]);
  const [person, setPerson] = useState({ name: "Aditya", age: 20 });
  const [Todos, setTodos] = useState([
    { text: "Learn javascript", key: 1 },
    { text: "Learn c", key: 2 },
    { text: "Learn Golang", key: 3 },
    { text: "Learn c++", key: 4 },
  ]);
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    // event.persist(); // Prevents the event object from being reused or nullified
    setText(val);
  };
  const clickHandler = () => {
    if (name == "Aditya") {
      setName("Azad Roy");
    } else {
      setName("Aditya");
    }
  };
  const PressHandler = (key) => {
    console.log(key);
    // setPeople((prevPeople) => {
    //   return prevPeople.filter((person) => person.id != id);
    // });
    Alert.alert("Alert", "⚠️Task will be removed!", [
      {
        text: "ok",
        onPress: setTodos((prevTodos) => {
          return prevTodos.filter((Todos) => Todos.key != key);
        }),
      },
      {
        text: "Close",
        onPress: () => {
          console.log('Task not removed');
        }
      },
    ]);
  };
  const clickchecker = () => {
    if (person.name == "Aditya") {
      setPerson({ name: "Azad  Roy", age: 65 });
    } else {
      setPerson({ name: "Aditya", age: 20 });
    }
  };
  const updateList = () => {
    if (text.length >= 3) {
      Alert.alert("Congrats!", "✅Task has been added", [
        {
          text: "close",
          onPress: () => console.log("Task added successfully"),
        },
      ]);
      setTodos((prevTodos) => [
        { text, key: Math.random().toString() },
        ...prevTodos,
      ]);
      setText("");
    } else if (text.length < 1) {
      Alert.alert("OOPS!", "⚠️Empty Field", [
        { text: "Understood", onPress: () => console.log("Empty field") },
      ]);
    } else {
      Alert.alert("OOPS!", "❗Length of task should be greater than 2", [
        { text: "Understood", onPress: () => console.log("Small length task") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      // console.log('Dismissing keyboard');
    }}>
      <View style ={styles.container}>
        {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello,World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Loreum text hkdheUKKNFLFkjfbBF fjbf</Text>
        <Text style={styles.boldText}>Loreum text hkdheUKKNFLFkjfbBF fjbf</Text>
        <Text style={styles.boldText}>Loreum text hkdheUKKNFLFkjfbBF fjbf</Text>
      </View>
      <View>
        <Text style={styles.boldText}>
          My name is {name} and age is {age}
        </Text>
        <Text style={styles.boldText}>
          His name is {person.name} and his age is {person.age}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update perosn state" onPress={clickchecker} />
      </View>
      <View>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g.John Doe"
          onChangeText={(val) => setName(val)}
          multiline
        />
      </View>
      <View>
        <Text>Enter age:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g.20"
          keyboardType="numeric"
          onChangeText={(val) => setAge(val)}
        />
      </View> */}
        {/* <View style={styles.container}> */}
        {/* <ScrollView>
          {people.map((item) => {
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>;
          })}
        </ScrollView> */}

        {/* <FlatList 
numColumns={2}
keyExtractor={(item)=>item.id}
data={people}
renderItem={({item})=>(
  <TouchableOpacity onPress={()=>PressHandler(item.id)}>
<Text style={styles.item}>{item.name}</Text></TouchableOpacity>
)}
/> */}

        {/* </View> */}

        <View style={styles.header}>
          <Text style={styles.headerText}>TO-DO LIST</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", padding: 15, fontSize: 25 }}>
            Enter item to the list:
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#777",
              padding: 15,
              margin: 10,
              width: 320,
            }}
            placeholder="e.g. I want to achieve this.."
            multiline
            keyboardType="default"
            onChangeText={changeHandler}
            value={text}
          />
          <Button title="Add the item to the List" onPress={updateList} />
          </View>
          <View style={styles.listContainer}>
          <FlatList
          
            data={Todos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => PressHandler(item.key)}>
                <View  style={
                   styles.item
                  }>
        
        <AntDesign name="delete" size={18} color="black" />
                <Text
                 style={styles.itemText}
                >
                  {item.text}
                </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          </View>
       
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#6200ea",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
   
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  InputText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
 
  item: {
    padding: 14,
    marginVertical: 10,
    backgroundColor: '#ffcccb',
    borderRadius: 10,
    fontSize: 18,
    flexDirection:"row",

  },
  itemText:{
marginLeft:10,
  },
  listContainer:{
    flex:1,
  },
});
