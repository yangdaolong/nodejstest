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
    key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "key",
      autoIncrement: false,
      unique: "acme_storage_key_key"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
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
    }
  };
  const options = {
    tableName: "acme_storage",
    comment: "",
    indexes: [{
      name: "acme_storage_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }]
  };
  const AcmeStorageModel = sequelize.define("acme_storage_model", attributes, options);
  return AcmeStorageModel;
};