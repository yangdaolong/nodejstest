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
    prefix: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "prefix",
      autoIncrement: false,
      unique: "sm_vaults_prefix_key"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    config: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "config",
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updated_at",
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
    }
  };
  const options = {
    tableName: "sm_vaults",
    comment: "",
    indexes: [{
      name: "sm_vaults_id_ws_id_key",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "sm_vaults_prefix_ws_id_key",
      unique: true,
      fields: ["prefix", "ws_id"]
    }, {
      name: "sm_vaults_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const SmVaultsModel = sequelize.define("sm_vaults_model", attributes, options);
  return SmVaultsModel;
};