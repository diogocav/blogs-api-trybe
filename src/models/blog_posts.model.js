module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('blog_post', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        published: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
      });
  
    blogPost.associate = (models) => {
      blogPost.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
      });
    };
      
    return blogPost;
  };
  
