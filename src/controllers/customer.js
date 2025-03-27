class CustomerController {
  constructor(service) {
    this.service = service;
  }

  async getAll() {
    return await this.service.getAllCustomers();
  }

  async getById(id) {
    const customer = await this.service.getCustomerById(id);
    if (!customer) throw new Error('Customer not found new message');
    return customer;
  }

  async create(name, email) {
    return await this.service.createCustomer(name, email);
  }

  async update(id, name, email) {
    return await this.service.updateCustomer(id, name, email);
  }

  async delete(id) {
    await this.service.deleteCustomer(id);
    return { message: 'Customer deleted' };
  }
}

module.exports = CustomerController;
