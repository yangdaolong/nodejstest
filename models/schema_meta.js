const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    key: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "key",
      autoIncrement: false
    },
    subsystem: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "subsystem",
      autoIncrement: false
    },
    last_executed: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_executed",
      autoIncrement: false
    },
    executed: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "executed",
      autoIncrement: false
    },
    pending: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "pending",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "schema_meta",
    comment: "",
    indexes: []
  };
  const SchemaMetaModel = sequelize.define("schema_meta_model", attributes, options);
  return SchemaMetaModel;
};