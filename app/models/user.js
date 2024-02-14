module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
      "users", // Model name
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
        mobile_no: {
          type: DataTypes.STRING,
          unique: true
        },
        email: {
          type: DataTypes.STRING,
          unique: true
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
  
    return User;
  };