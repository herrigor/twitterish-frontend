import { UserJSONSChema, User } from "./user.model";

export type Tweet = {
  id: string;
  user: User;
  message: string;
  datetime: number;
}
export type Tweets = Tweet[]

export const TweetJSONSchema: any = {
  "$ref": "#/definitions/Tweets",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "Tweet": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "string"
        },
        "datetime": {
          "type": "number"
        },
        "message": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "required": [
        "id",
        "user",
        "message",
        "datetime"
      ],
      "type": "object"
    },
    "Tweets": {
      "items": {
        "$ref": "#/definitions/Tweet"
      },
      "type": "array"
    },
    "User": {
      "additionalProperties": false,
      "properties": {
        "avatar": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "handle": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "handle",
        "name"
      ],
      "type": "object"
    }
  }
}
