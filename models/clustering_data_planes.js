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
    hostname: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hostname",
      autoIncrement: false
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ip",
      autoIncrement: false
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "timezone(UTC",
      comment: null,
      primaryKey: false,
      field: "last_seen",
      autoIncrement: false
    },
    config_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "config_hash",
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
    },
    version: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    },
    sync_status: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "unknown",
      comment: null,
      primaryKey: false,
      field: "sync_status",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "timezone(UTC",
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    },
    labels: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "labels",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "clustering_data_planes",
    comment: "",
    indexes: [{
      name: "clustering_data_planes_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }]
  };
  const ClusteringDataPlanesModel = sequelize.define("clustering_data_planes_model", attributes, options);
  return ClusteringDataPlanesModel;
};