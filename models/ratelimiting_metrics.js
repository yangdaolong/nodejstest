const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    identifier: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "identifier",
      autoIncrement: false
    },
    period: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "period",
      autoIncrement: false
    },
    period_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "period_date",
      autoIncrement: false
    },
    service_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: "00000000-0000-0000-0000-000000000000",
      comment: null,
      primaryKey: true,
      field: "service_id",
      autoIncrement: false
    },
    route_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: "00000000-0000-0000-0000-000000000000",
      comment: null,
      primaryKey: true,
      field: "route_id",
      autoIncrement: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
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
    tableName: "ratelimiting_metrics",
    comment: "",
    indexes: [{
      name: "ratelimiting_metrics_idx",
      unique: false,
      fields: ["service_id", "route_id", "period_date", "period"]
    }, {
      name: "ratelimiting_metrics_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }]
  };
  const RatelimitingMetricsModel = sequelize.define("ratelimiting_metrics_model", attributes, options);
  return RatelimitingMetricsModel;
};