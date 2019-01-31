module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    noOfQuotes: DataTypes.INTEGER,
    Quotes: DataTypes.JSON,
  }, {});

  User.generateUserData = (name, email, noOfQuotes, Quotes) => User.create({
    name, email, noOfQuotes, Quotes,
  });

  User.updateQuotes = async (name, noOfQuotes) => {
    const oldQuotes = await User.findAll({
      attributes: ['Quotes'],
      where: {
        name,
      },
    });
    let newQuotes;
    for (let i = 0; i < noOfQuotes; i += 1) {
      newQuotes = oldQuotes[i];
    }
    const user = await User.update({
      Quotes: newQuotes,
    }, {
      where: {
        name,
      },
    });
    return user;
  };

  return User;
};
