const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    entity_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "entity_id",
      autoIncrement: false,
    },
    entity_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "entity_name",
      autoIncrement: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tags",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "tags",
    comment: "",
    indexes: [
      {
        name: "tags_entity_name_idx",
        unique: false,
        fields: ["entity_name"],
      },
      {
        name: "tags_tags_idx",
        unique: false,
        fields: ["tags"],
      },
    ],
  };
  const TagsModel = sequelize.define("tags_model", attributes, options);
  return TagsModel;
};
