const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "timezone(UTC",
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    consumer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "consumer_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "consumers_model"
      }
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "key",
      autoIncrement: false
    },
    tags: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tags",
      autoIncrement: false
    },
    ttl: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ttl",
      autoIncrement: false
    },
    ws_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ws_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "workspaces_model"
      }
    }
  };
  const options = {
    tableName: "keyauth_credentials",
    comment: "",
    indexes: [{
      name: "keyauth_credentials_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "keyauth_credentials_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "keyauth_credentials_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }, {
      name: "keyauth_credentials_ws_id_key_unique",
      unique: true,
      fields: ["ws_id", "key"]
    }, {
      name: "keyauth_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const KeyauthCredentialsModel = sequelize.define("keyauth_credentials_model", attributes, options);
  return KeyauthCredentialsModel;
};