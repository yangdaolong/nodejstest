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
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    }
  };
  const options = {
    tableName: "parameters",
    comment: "",
    indexes: []
  };
  const ParametersModel = sequelize.define("parameters_model", attributes, options);
  return ParametersModel;
};