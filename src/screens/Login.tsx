import { useApp } from "@realm/react";
import Realm from "realm";
import { Button, SafeAreaView } from "react-native";

function LogIn() {
  const app = useApp();
  // This example uses anonymous authentication.
  // However, you can use any authentication provider
  // to log a user in with this pattern.
  async function logInUser() {
    await app.logIn(Realm.Credentials.anonymous());
  }
  return (
    <SafeAreaView>
      <Button title="Log In" onPress={logInUser} />
    </SafeAreaView>
  );
}

export default LogIn;
