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
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
    tableName: "basicauth_credentials",
    comment: "",
    indexes: [{
      name: "basicauth_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "basicauth_credentials_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "basicauth_credentials_ws_id_username_unique",
      unique: true,
      fields: ["ws_id", "username"]
    }, {
      name: "basicauth_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const BasicauthCredentialsModel = sequelize.define("basicauth_credentials_model", attributes, options);
  return BasicauthCredentialsModel;
};