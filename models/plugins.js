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
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    consumer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "consumer_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "consumers_model"
      }
    },
    service_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "service_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "services_model"
      }
    },
    route_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "route_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "routes_model"
      }
    },
    config: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "config",
      autoIncrement: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enabled",
      autoIncrement: false
    },
    cache_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cache_key",
      autoIncrement: false,
      unique: "plugins_cache_key_key"
    },
    protocols: {
      type: array,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "protocols",
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
    instance_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "instance_name",
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
    tableName: "plugins",
    comment: "",
    indexes: [{
      name: "plugins_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "plugins_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "plugins_name_idx",
      unique: false,
      fields: ["name"]
    }, {
      name: "plugins_route_id_idx",
      unique: false,
      fields: ["route_id"]
    }, {
      name: "plugins_service_id_idx",
      unique: false,
      fields: ["service_id"]
    }, {
      name: "plugins_tags_idx",
      unique: false,
      fields: ["tags"]
    }, {
      name: "plugins_ws_id_instance_name_unique",
      unique: true,
      fields: ["ws_id", "instance_name"]
    }]
  };
  const PluginsModel = sequelize.define("plugins_model", attributes, options);
  return PluginsModel;
};