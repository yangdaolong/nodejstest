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
    credential_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "credential_id",
      autoIncrement: false,
      references: {
        key: "ws_id",
        model: "oauth2_credentials_model"
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
    access_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "access_token",
      autoIncrement: false
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "refresh_token",
      autoIncrement: false
    },
    token_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "token_type",
      autoIncrement: false
    },
    expires_in: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "expires_in",
      autoIncrement: false
    },
    authenticated_userid: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "authenticated_userid",
      autoIncrement: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "scope",
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
    }
  };
  const options = {
    tableName: "oauth2_tokens",
    comment: "",
    indexes: [{
      name: "oauth2_tokens_authenticated_userid_idx",
      unique: false,
      fields: ["authenticated_userid"]
    }, {
      name: "oauth2_tokens_credential_id_idx",
      unique: false,
      fields: ["credential_id"]
    }, {
      name: "oauth2_tokens_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "oauth2_tokens_service_id_idx",
      unique: false,
      fields: ["service_id"]
    }, {
      name: "oauth2_tokens_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }, {
      name: "oauth2_tokens_ws_id_access_token_unique",
      unique: true,
      fields: ["ws_id", "access_token"]
    }, {
      name: "oauth2_tokens_ws_id_refresh_token_unique",
      unique: true,
      fields: ["ws_id", "refresh_token"]
    }]
  };
  const Oauth2TokensModel = sequelize.define("oauth2_tokens_model", attributes, options);
  return Oauth2TokensModel;
};