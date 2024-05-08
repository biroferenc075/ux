import { Animated, View, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  Text,
  Button,
  CheckBox,
  Divider,
  IndexPath,
  Select,
  SelectItem,
  Input,
} from "@ui-kitten/components";
import { useForm, Controller, Form } from "react-hook-form";
import { Diets } from "@/models/enums/diets";
import { Allergens } from "@/models/enums/allergens";
import { router } from "expo-router";
import { useAppContext } from "@/store/AppContext";
import AllergenSelector from "@/components/AllergenSelector";
import { CohereClient } from "cohere-ai";

export default function SuggestionScreen() {
  const API_KEY = "eCTGq8szKXxxnmSDRO1oCAi9rPugl2aLlM7Ai0ru";
  const cohere = new CohereClient({
    token: API_KEY,
  });

  const { state, dispatch } = useAppContext();

  const getSuggestion = async () => {
    const chat = await cohere.chat({
      message:
        "Give me two recommendations of the following foods: Pizza, Salad, Macaroni. " + // todo provide the filtered items
        `${
          state.suggestionComment.length > 0
            ? `Consider this too: ${state.suggestionComment}. `
            : ""
        }` +
        "Answer with only the foods' names that I provided, separated by a comma. No other word.",
    });

    console.log(chat.text);
  };

  const getChecked = (cbName: string, values: string[]) => {
    return values.includes(cbName);
  };
  const handleChange = (
    allergen: Allergens,
    values: string[],
    newValue: boolean
  ) => {
    if (!newValue) {
      values.splice(values.indexOf(allergen), 1);
    } else {
      values.push(allergen);
    }

    if (state.allowedAllergens.includes(allergen)) {
      dispatch({ type: "REMOVE_ALLOWED_ALLERGEN", payload: allergen });
    } else {
      dispatch({ type: "ADD_ALLOWED_ALLERGEN", payload: allergen });
    }

    return values;
  };

  const handleChangeDiet = (diet: Diets) => {
    dispatch({ type: "SET_SUGGESTION_DIET", payload: diet });
  };

  const handleChangeComment = (comment: string) => {
    dispatch({ type: "SET_SUGGESTION_COMMENT", payload: comment });
  };

  const allergenDisplay = (all: Allergens) => {
    return all.charAt(0).toUpperCase() + all.slice(1);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      diet: Diets.meat_eater,
      comment: "",
    },
    values: {
      diet: Diets.meat_eater,
      comment: "",
    },
  });

  const dietArr = [
    Diets.meat_eater,
    Diets.pescatarian,
    Diets.vegetarian,
    Diets.vegan,
  ];
  const displDietArr = ["None", "Pescatarian", "Vegetarian", "Vegan"];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../../../assets/dump/robot-chatbot-head-icon-sign-vector.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title} category="h4">
        Can't decide? Let me help!
      </Text>
      <Text style={styles.subheader}>Which allergens are a no-go?</Text>
      <AllergenSelector />
      <Text style={styles.subheader}>Are you on a special diet?</Text>
      <Controller
        name="diet"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              style={styles.selector}
              value={displDietArr[new IndexPath(dietArr.indexOf(value)).row]}
              selectedIndex={new IndexPath(dietArr.indexOf(value))}
              onSelect={(index) => {
                const idx = index as IndexPath;
                handleChangeDiet(dietArr[idx.row]);
                onChange(dietArr[idx.row]);
              }}
            >
              <SelectItem title="None" />
              <SelectItem title="Pescatarian" />
              <SelectItem title="Vegetarian" />
              <SelectItem title="Vegan" />
            </Select>
          );
        }}
      />
      <Text style={styles.subheader}>
        Anything else I should take into consideration?
      </Text>
      <Controller
        name="comment"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              style={styles.inputText}
              multiline={true}
              placeholder="Your mood, other preferences etc."
              value={value}
              onChangeText={(nextValue) => {
                handleChangeComment(nextValue);
                onChange(nextValue);
              }}
            />
          );
        }}
      />
      <Button
        style={styles.button}
        onPress={() => {
          getSuggestion();
          router.navigate({ pathname: "suggestion/chat" });
        }}
      >
        {" "}
        Ask for suggestions!{" "}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
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
    width: "50%",
    marginTop: -10,
    textAlign: "center",
  },

  subheader: {
    fontSize: 18,
    width: "80%",
    marginTop: -10,
    marginBottom: -5,
    textAlign: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  selector: {
    width: "75%",
  },

  inputText: {
    width: "75%",
    minHeight: 64,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  imagecontainer: {
    marginTop: 40,
    height: 150,
    width: 150,
    borderRadius: 90,
  },

  button: {
    marginTop: -20,
    marginBottom: 40,
  },
});
