export type User = {
  handle: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export const UserJSONSChema: any = {
  "$ref": "#/definitions/User",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
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
