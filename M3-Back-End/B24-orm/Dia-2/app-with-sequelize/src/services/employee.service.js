const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' }
  });
  return users;
}

// const getById = async (id) => { // Eager loading
//   const employee = await Employee.findOne({
//     where: { id },
//     include: [{ model: Address, as: 'addresses' }],
//   });
//   return employee;
// }

const getById = async (id) => { // Lazy loading
  const employee = await Employee.findOne({ where: { id } });
  return employee;
}

module.exports = { 
  getAll,
  getById,
};