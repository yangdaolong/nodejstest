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
    username: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "username",
      autoIncrement: false
    },
    secret: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "secret",
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
    tableName: "hmacauth_credentials",
    comment: "",
    indexes: [{
      name: "hmacauth_credentials_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "hmacauth_credentials_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "hmacauth_credentials_ws_id_username_unique",
      unique: true,
      fields: ["ws_id", "username"]
    }, {
      name: "hmacauth_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const HmacauthCredentialsModel = sequelize.define("hmacauth_credentials_model", attributes, options);
  return HmacauthCredentialsModel;
};