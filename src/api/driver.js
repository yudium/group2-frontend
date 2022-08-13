import axios from 'axios';

const api = 'http://localhost:8000/';

class Driver {
  async getDrivers({ name } = {}) {
    let data = [
      {
        id: 'id1',
        driver_name: 'driver_name1',
        phone_number: 'phone_number1',
        created_at: 'created_at1',
        status: 'status1',
      },
      {
        id: 'id2',
        driver_name: 'driver_name2',
        phone_number: 'phone_number2',
        created_at: 'created_at2',
        status: 'status2',
      },
      {
        id: 'id1',
        driver_name: 'driver_name1',
        phone_number: 'phone_number1',
        created_at: 'created_at1',
        status: 'status1',
      },
    ];

    // search by name
    if (name) {
      data = data.filter((t) => {
        return t.driver_name.includes(name.trim());
      });
    }

    return data;
  }
}

const driver = new Driver();
export default driver;
