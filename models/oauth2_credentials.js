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
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
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
    client_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "client_id",
      autoIncrement: false
    },
    client_secret: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "client_secret",
      autoIncrement: false
    },
    redirect_uris: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "redirect_uris",
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
    client_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "client_type",
      autoIncrement: false
    },
    hash_secret: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_secret",
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
    tableName: "oauth2_credentials",
    comment: "",
    indexes: [{
      name: "oauth2_credentials_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "oauth2_credentials_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "oauth2_credentials_secret_idx",
      unique: false,
      fields: ["client_secret"]
    }, {
      name: "oauth2_credentials_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "oauth2_credentials_ws_id_client_id_unique",
      unique: true,
      fields: ["ws_id", "client_id"]
    }]
  };
  const Oauth2CredentialsModel = sequelize.define("oauth2_credentials_model", attributes, options);
  return Oauth2CredentialsModel;
};