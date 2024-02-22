import { RealmProvider } from "@realm/react";
import { Text } from "react-native";
import "react-native-get-random-values";
import { SiteSettings } from "./models/SiteSettings";
import Dashboard from "./screens/Dashboard";

export default function RealmWrapper() {
  return (
    <RealmProvider
      schema={[SiteSettings]}
      sync={{
        flexible: true,
        onError: (_session, error) => {
          console.log(error);
        },
        initialSubscriptions: {
          update(subs, realm) {
            subs.add(realm.objects(SiteSettings));
          },
          rerunOnOpen: true,
        },
      }}
      fallback={<Text>Loading...</Text>}
    >
      <Dashboard />
    </RealmProvider>
  );
}
