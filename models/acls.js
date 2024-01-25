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
    group: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "group",
      autoIncrement: false
    },
    cache_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cache_key",
      autoIncrement: false,
      unique: "acls_cache_key_key"
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
    tableName: "acls",
    comment: "",
    indexes: [{
      name: "acls_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "acls_group_idx",
      unique: false,
      fields: ["group"]
    }, {
      name: "acls_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "acls_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const AclsModel = sequelize.define("acls_model", attributes, options);
  return AclsModel;
};