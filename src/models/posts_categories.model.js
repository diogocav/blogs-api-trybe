module.exports = (sequelize, _DataTypes) => {
    const postsCategorie = sequelize.define('posts_categories',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      },
      postsCategorie.associate = (models) => {
        models.blogPost.belongsToMany(models.category, {
          as: 'categories',
          through: postsCategorie,
          foreignKey: 'post_id',
          otherKey: 'category_id',
        });
        models.category.belongsToMany(models.blogPost, {
          as: 'blog_posts',
          through: postsCategorie,
          foreignKey: 'category_id',
          otherKey: 'post_id',
        });
    });

  
    return postsCategorie;
  };
