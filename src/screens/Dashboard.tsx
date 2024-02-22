import { useQuery, useRealm } from "@realm/react";
import { SiteSettings } from "../models/SiteSettings";
import { BSON } from "realm";
import { Button, FlatList, Text, View } from "react-native";

export default function Dashboard() {
  const siteSettings = useQuery(SiteSettings);
  const realm = useRealm();

  const addProfile = () => {
    realm.write(() => {
      realm.create(SiteSettings, {
        _id: new BSON.ObjectId(),
        name: "test",
        siteCode: "NK",
      });
    });
  };
  return (
    <View>
      <Button title="Add Site Settings" onPress={addProfile} />
      <FlatList
        data={siteSettings}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
