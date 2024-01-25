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
    code: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
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
    challenge: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "challenge",
      autoIncrement: false
    },
    challenge_method: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "challenge_method",
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
    plugin_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "plugin_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "plugins_model"
      }
    }
  };
  const options = {
    tableName: "oauth2_authorization_codes",
    comment: "",
    indexes: [{
      name: "oauth2_authorization_codes_authenticated_userid_idx",
      unique: false,
      fields: ["authenticated_userid"]
    }, {
      name: "oauth2_authorization_codes_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "oauth2_authorization_codes_ttl_idx",
      unique: false,
      fields: ["ttl"]
    }, {
      name: "oauth2_authorization_codes_ws_id_code_unique",
      unique: true,
      fields: ["ws_id", "code"]
    }, {
      name: "oauth2_authorization_credential_id_idx",
      unique: false,
      fields: ["credential_id"]
    }, {
      name: "oauth2_authorization_service_id_idx",
      unique: false,
      fields: ["service_id"]
    }]
  };
  const Oauth2AuthorizationCodesModel = sequelize.define("oauth2_authorization_codes_model", attributes, options);
  return Oauth2AuthorizationCodesModel;
};