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
    upstream_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "upstream_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "upstreams_model"
      }
    },
    target: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "target",
      autoIncrement: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "weight",
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
    },
    cache_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cache_key",
      autoIncrement: false,
      unique: "targets_cache_key_key"
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
    tableName: "targets",
    comment: "",
    indexes: [{
      name: "targets_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "targets_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "targets_target_idx",
      unique: false,
      fields: ["target"]
    }, {
      name: "targets_upstream_id_idx",
      unique: false,
      fields: ["upstream_id"]
    }]
  };
  const TargetsModel = sequelize.define("targets_model", attributes, options);
  return TargetsModel;
};