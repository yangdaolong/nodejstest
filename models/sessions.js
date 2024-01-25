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
    session_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "session_id",
      autoIncrement: false,
      unique: "sessions_session_id_key"
    },
    expires: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "expires",
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
    tableName: "sessions",
    comment: "",
    indexes: [{
      name: "session_sessions_expires_idx",
      unique: false,
      fields: ["expires"]
    }, {
      name: "sessions_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }]
  };
  const SessionsModel = sequelize.define("sessions_model", attributes, options);
  return SessionsModel;
};