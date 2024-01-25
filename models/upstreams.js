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
      defaultValue: "timezone(UTC",
      comment: null,
      primaryKey: false,
      field: "created_at",
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
    hash_on: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on",
      autoIncrement: false
    },
    hash_fallback: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_fallback",
      autoIncrement: false
    },
    hash_on_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on_header",
      autoIncrement: false
    },
    hash_fallback_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_fallback_header",
      autoIncrement: false
    },
    hash_on_cookie: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on_cookie",
      autoIncrement: false
    },
    hash_on_cookie_path: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on_cookie_path",
      autoIncrement: false
    },
    slots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "slots",
      autoIncrement: false
    },
    healthchecks: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "healthchecks",
      autoIncrement: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tags",
      autoIncrement: false
    },
    algorithm: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "algorithm",
      autoIncrement: false
    },
    host_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "host_header",
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
        key: "id",
        model: "certificates_model"
      }
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
    hash_on_query_arg: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on_query_arg",
      autoIncrement: false
    },
    hash_fallback_query_arg: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_fallback_query_arg",
      autoIncrement: false
    },
    hash_on_uri_capture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_on_uri_capture",
      autoIncrement: false
    },
    hash_fallback_uri_capture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hash_fallback_uri_capture",
      autoIncrement: false
    },
    use_srv_name: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "use_srv_name",
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
    }
  };
  const options = {
    tableName: "upstreams",
    comment: "",
    indexes: [{
      name: "upstreams_fkey_client_certificate",
      unique: false,
      fields: ["client_certificate_id"]
    }, {
      name: "upstreams_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "upstreams_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "upstreams_ws_id_name_unique",
      unique: true,
      fields: ["ws_id", "name"]
    }]
  };
  const UpstreamsModel = sequelize.define("upstreams_model", attributes, options);
  return UpstreamsModel;
};