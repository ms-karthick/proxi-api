module.exports = (sequelize, Sequelize, DataTypes) => {

  // User model
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    // Other user attributes
  });

  // Order model
  const Order = sequelize.define('orders', {
    qty: DataTypes.INTEGER,
    total_amount: DataTypes.DECIMAL,
    // Other order attributes
  });

  User.hasMany(Order);
  Order.belongsTo(User);

  const OrderModel = sequelize.define(
    "orders", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      total_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
      },
    },
    {
      // Options
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  );

  return OrderModel;
};