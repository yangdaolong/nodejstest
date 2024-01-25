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
    owner: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner",
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
    tableName: "locks",
    comment: "",
    indexes: [{
      name: "locks_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }]
  };
  const LocksModel = sequelize.define("locks_model", attributes, options);
  return LocksModel;
};