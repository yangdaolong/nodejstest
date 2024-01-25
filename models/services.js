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
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    retries: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "retries",
      autoIncrement: false
    },
    protocol: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "protocol",
      autoIncrement: false
    },
    host: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "host",
      autoIncrement: false
    },
    port: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "port",
      autoIncrement: false
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "path",
      autoIncrement: false
    },
    connect_timeout: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "connect_timeout",
      autoIncrement: false
    },
    write_timeout: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "write_timeout",
      autoIncrement: false
    },
    read_timeout: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "read_timeout",
      autoIncrement: false
    },
    tags: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tags",
      autoIncrement: false
    },
    client_certificate_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "client_certificate_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "certificates_model"
      }
    },
    tls_verify: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tls_verify",
      autoIncrement: false
    },
    tls_verify_depth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tls_verify_depth",
      autoIncrement: false
    },
    ca_certificates: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ca_certificates",
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
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enabled",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "services",
    comment: "",
    indexes: [{
      name: "services_fkey_client_certificate",
      unique: false,
      fields: ["client_certificate_id"]
    }, {
      name: "services_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "services_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "services_ws_id_name_unique",
      unique: true,
      fields: ["ws_id", "name"]
    }]
  };
  const ServicesModel = sequelize.define("services_model", attributes, options);
  return ServicesModel;
};