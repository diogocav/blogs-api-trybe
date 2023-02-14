module.exports = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      },
      postsCategorie.associate = (models) => {
        models.category.belongsToMany(models.blogPost, {
          as: 'blogPosts',
          through: postsCategorie,
          foreignKey: 'post_id',
          otherKey: 'category_id',
        });
        models.blogPost.belongsToMany(models.category, {
          as: 'categories',
          through: postsCategorie,
          foreignKey: 'category_id',
          otherKey: 'post_id',
        });
    });

  
    return postsCategorie;
  };
