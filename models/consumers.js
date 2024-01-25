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
    username: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "username",
      autoIncrement: false
    },
    custom_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "custom_id",
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
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "timezone(UTC",
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "consumers",
    comment: "",
    indexes: [{
      name: "consumers_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "consumers_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "consumers_username_idx",
      unique: false,
      fields: []
    }, {
      name: "consumers_ws_id_custom_id_unique",
      unique: true,
      fields: ["ws_id", "custom_id"]
    }, {
      name: "consumers_ws_id_username_unique",
      unique: true,
      fields: ["ws_id", "username"]
    }]
  };
  const ConsumersModel = sequelize.define("consumers_model", attributes, options);
  return ConsumersModel;
};