module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
      });
  
    return category;
};
  
