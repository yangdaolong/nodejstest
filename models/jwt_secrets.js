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
    key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "key",
      autoIncrement: false
    },
    secret: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "secret",
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
    rsa_public_key: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rsa_public_key",
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
    tableName: "jwt_secrets",
    comment: "",
    indexes: [{
      name: "jwt_secrets_consumer_id_idx",
      unique: false,
      fields: ["consumer_id"]
    }, {
      name: "jwt_secrets_id_ws_id_unique",
      unique: true,
      fields: ["id", "ws_id"]
    }, {
      name: "jwt_secrets_secret_idx",
      unique: false,
      fields: ["secret"]
    }, {
      name: "jwt_secrets_ws_id_key_unique",
      unique: true,
      fields: ["ws_id", "key"]
    }, {
      name: "jwtsecrets_tags_idex_tags_idx",
      unique: false,
      fields: ["tags"]
    }]
  };
  const JwtSecretsModel = sequelize.define("jwt_secrets_model", attributes, options);
  return JwtSecretsModel;
};