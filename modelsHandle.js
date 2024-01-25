const fs = require("fs");
const path = require("path");

fs.readdirSync(__dirname + "/models/")
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    // console.log("file", file);

    // 文件路径
    const filePath = __dirname + "/models/" + file;

    // 读取文件内容
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return console.error(err);
      }

      // 替换文本
      const replacedData = data.replace(
        /type: array/g,
        "type: DataTypes.ARRAY(DataTypes.TEXT)"
      );

      // 写入新内容到文件
      fs.writeFile(filePath, replacedData, "utf8", (err) => {
        if (err) {
          return console.error(err);
        }
        console.log("文件内容替换成功。" + file);
      });
    });
  });
