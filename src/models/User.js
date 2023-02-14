module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
    );

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'user_id',
        as: 'blogPosts',
      });
    }
  
    return User;
  };