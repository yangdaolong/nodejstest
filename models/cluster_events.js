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
    node_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "node_id",
      autoIncrement: false
    },
    at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "at",
      autoIncrement: false
    },
    nbf: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nbf",
      autoIncrement: false
    },
    expire_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "expire_at",
      autoIncrement: false
    },
    channel: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "channel",
      autoIncrement: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "data",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cluster_events",
    comment: "",
    indexes: [{
      name: "cluster_events_at_idx",
      unique: false,
      fields: ["at"]
    }, {
      name: "cluster_events_channel_idx",
      unique: false,
      fields: ["channel"]
    }, {
      name: "cluster_events_expire_at_idx",
      unique: false,
      fields: ["expire_at"]
    }]
  };
  const ClusterEventsModel = sequelize.define("cluster_events_model", attributes, options);
  return ClusterEventsModel;
};