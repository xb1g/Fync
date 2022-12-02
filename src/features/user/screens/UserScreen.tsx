import React, { useContext } from "react";
import { SafeTop } from "../../../../components/SafeTop";
import { Box, Button, Heading, HStack, ScrollView, View } from "native-base";
import { ToggleDarkMode } from "../../../../components/ThemeSwitch";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../contexts/user/context";
import { Alert } from "react-native";
import BackButton from "../../../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function UserScreen() {
  const navigation = useNavigation();
  const { deleteUserData } = useContext(UserContext);
  const insets = useSafeAreaInsets();
  return (
    <>
      <BackButton />
      <HStack
        position={"absolute"}
        top={insets.top + "px"}
        left={"10"}
        zIndex={5}
        mx={2}
        justifyContent="center"
      >
        <Heading fontSize="4xl">User</Heading>
      </HStack>
      <ScrollView flex={1} p={2} variant="background">
        <SafeTop />
        <SafeTop />
        <View m="5">
          <Heading mb={"2"}>Theme</Heading>
          <ToggleDarkMode />
        </View>

        <Button
          colorScheme="secondary"
          m="5"
          onPress={() => {
            Alert.alert(
              "Delete Account",
              "Are you sure you want to delete your account?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                { text: "Yes", onPress: deleteUserData, style: "destructive" },
              ],
              { cancelable: false }
            );
          }}
        >
          Delete User
        </Button>
      </ScrollView>
    </>
  );
}