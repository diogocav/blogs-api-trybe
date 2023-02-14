module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
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

    user.hasMany(models.blogPost, {
      foreignKey: 'user_id',
      as: 'blog_posts',
    });
  
    return user;
  };