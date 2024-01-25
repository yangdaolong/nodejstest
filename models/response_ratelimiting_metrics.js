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
    }
  };
  const options = {
    tableName: "response_ratelimiting_metrics",
    comment: "",
    indexes: []
  };
  const ResponseRatelimitingMetricsModel = sequelize.define("response_ratelimiting_metrics_model", attributes, options);
  return ResponseRatelimitingMetricsModel;
};