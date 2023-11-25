"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.roles, {
        through: "user_role",
        foreignKey: "userId",
      });
      User.belongsTo(models.types, {
        foreignKey: "typeId",
      });
      User.hasMany(models.login_tokens, {
        foreignKey: "userId",
      });
      User.hasMany(models.user_socials, {
        foreignKey: "userId",
      });
      User.hasOne(models.user_otp, {
        foreignKey: "userId",
      });
      User.hasMany(models.courses, {
        foreignKey: "teacherId",
      });
      User.belongsToMany(models.classes, {
        through: "classes_teachers",
        foreignKey: "teacherId",
      });
      User.hasMany(models.teacher_calendar, {
        foreignKey: "teacherId",
      });
      User.hasMany(models.students_classes, {
        foreignKey: "studentId",
      });
      User.hasMany(models.students_attendance, {
        foreignKey: "studentId",
      });
      User.hasMany(models.comments, {
        foreignKey: "studentId",
      });
      User.hasOne(models.users_columns, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      firstLogin: DataTypes.TINYINT(1),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
