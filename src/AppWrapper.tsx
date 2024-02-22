import { AppProvider, UserProvider } from "@realm/react";
import "react-native-get-random-values";
import LogIn from "./screens/Login";
import RealmWrapper from "./RealmWrapper";

export default function AppWrapper() {
  return (
    <AppProvider id={"SET_ID"}>
      <UserProvider fallback={LogIn}>
        <RealmWrapper />
      </UserProvider>
    </AppProvider>
  );
}
