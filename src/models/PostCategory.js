module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      });
      
      PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blogPosts',
          through: PostCategory,
          foreignKey: 'post_id',
          otherKey: 'category_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'category_id',
          otherKey: 'post_id',
        });
    };

  
    return PostCategory;
  };
