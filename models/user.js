module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    noOfQuotes: DataTypes.INTEGER,
    Quotes: DataTypes.JSON,
  }, {});

  return User;
};
