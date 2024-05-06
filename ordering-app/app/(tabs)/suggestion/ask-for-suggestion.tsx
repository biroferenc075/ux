import { View, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Text, Button, CheckBox, Divider, IndexPath, Select, SelectItem, Input } from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { Diets } from "@/models/enums/diets";
import { Allergens } from "@/models/enums/allergens";
import { router } from "expo-router";

export default function SuggestionScreen() {
  
  const getChecked = (cbName : string, values: string[]) => {
    return values.includes(cbName)
  }
  const handleChange = (cbName : string, values: string[], newValue: boolean) => {
    if(!newValue) {
      values.splice(values.indexOf(cbName),1);
    } else {
      values.push(cbName)
    }
    return values;
  }
  
  const allergenDisplay = (all : Allergens) => {
    return all.charAt(0).toUpperCase() + all.slice(1)
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      allergies: [],
      diet: Diets.meat_eater,
      comment: ""
    },values: {
      allergies : [],
      diet: Diets.meat_eater,
      comment: ""
    }
  });
  const onSubmit = (data: any) => console.log(data);

  const dietArr = [Diets.meat_eater, Diets.pescatarian, Diets.vegan, Diets.vegetarian]
  const displDietArr = ["None", "Pescatarian", "Vegan", "Vegetarian"]
  

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.imagecontainer}>
        <Image source={require("../../../assets/dump/robot-chatbot-head-icon-sign-vector.png")} style={styles.image} />
      </View>
      <Text style={styles.title} category="h4">Can't decide? Let me help!</Text>
      <Text style={styles.subheader}>Do you have any allergies?</Text>
      <Controller
        name="allergies"
        control={control}
        render={({ field : { onChange, value } }) => { 
          return <View style = {styles.checkBoxMainContainer}>
              <View style = {styles.checkBoxContainer}>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.gluten, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.gluten, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.gluten)}</Text>}
                </CheckBox>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.dairy, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.dairy, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.dairy)}</Text>}
                </CheckBox>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.eggs, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.eggs, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.eggs)}</Text>}
                </CheckBox>
              </View>
              <View style = {styles.checkBoxContainer}>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.shellfish, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.shellfish, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.shellfish)}</Text>}
                </CheckBox>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.nuts, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.nuts, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.nuts)}</Text>}
                </CheckBox>
                <CheckBox style = {styles.checkBox}
                checked = {getChecked(Allergens.soy, value)}
                onChange={nextChecked => onChange(handleChange(Allergens.soy, value, nextChecked))}
                >
                {evaProps => <Text style = {styles.checkBoxText} {...evaProps}>{allergenDisplay(Allergens.soy)}</Text>}
                </CheckBox>
              </View>
          </View>
            }}
          />

      <Text style={styles.subheader}>Are you on a special diet?</Text>
      <Controller
      name="diet"
      control={control}
      render={({ field : {onChange, value} }) => {
        return <Select style={styles.selector} value = {displDietArr[(new IndexPath(dietArr.indexOf(value)).row)]} selectedIndex = {new IndexPath(dietArr.indexOf(value))}
        onSelect={(index) => {const idx = index as IndexPath; onChange(dietArr[idx.row]);}}>
          <SelectItem title="None"/>
          <SelectItem title="Pescatarian"/>
          <SelectItem title="Vegetarian"/>
          <SelectItem title="Vegan"/>
        </Select>
        }} 
      />
      <Text style={styles.subheader}>Anything else I should take into consideration?</Text>
      <Controller
      name="comment"
      control={control}
      render={({ field : {onChange, value} }) => {
        return <Input style = {styles.inputText} multiline={true}
        placeholder='Your mood, other preferences etc.'
        value={value}
        onChangeText={nextValue => onChange(nextValue)}
      />
        }} 
      />
     <Button onPress={
      event => { 
        handleSubmit(onSubmit); 
        router.navigate({
          pathname: "suggestion/chat"})
        }}>Ask for suggestion!</Button>
    </ScrollView>);
}

const styles = StyleSheet.create({
  
  scrollView: {
    backgroundColor: 'white',
    padding: 0,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    columnGap: 20,
    rowGap: 30,
    alignItems: "center",
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexBasis: "40%"
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  }, 
  checkBoxMainContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 45,
    backgroundColor: "#00000000"
  },
  checkBoxContainer: {
    display: "flex",
    rowGap: 15,
    backgroundColor: "#00000000"
  },
  
  checkBox: {
    backgroundColor: "none"
  },

  checkBoxText: {
    backgroundColor: "none"
  },
  
  subheader: {
    fontSize: 18,
    flexBasis: "40%"
  },
  
  selector: {
    width: "80%"
  },

  inputText: {
    width: "80%",
    minHeight: 64,
  },
  
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  imagecontainer: {
    marginTop:40,
    height: 150,
    width: 150,
    borderRadius: 90
  },

  
});
