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
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
      unique: "snis_name_key"
    },
    certificate_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "certificate_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "certificates_model"
      }
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
    tableName: "snis",
    comment: "",
    indexes: [{
      name: "snis_certificate_id_idx",
      unique: false,
      fields: ["certificate_id"]
    }, {
      name: "snis_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "snis_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const SnisModel = sequelize.define("snis_model", attributes, options);
  return SnisModel;
};