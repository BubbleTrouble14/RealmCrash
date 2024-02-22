import Realm, { BSON } from "realm";

export class SiteSettings extends Realm.Object<SiteSettings> {
  _id!: BSON.ObjectId;
  name!: string;
  siteCode!: string;
  static schema: Realm.ObjectSchema = {
    name: "SiteSettings",
    properties: {
      _id: "objectId",
      name: { type: "string", indexed: "full-text" },
      siteCode: { type: "string", indexed: true },
    },
    primaryKey: "_id",
  };
}
