module.exports = (sequelize, Sequelize, DataTypes) => {

    const Product = sequelize.define(
      "product", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          unique: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull:false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        price: {
          type: DataTypes.INTEGER
        },
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    Product.hasMany(Order, {foreignKey: 'user_id'});
    return Product;
  };