import axios from 'axios';

const api = 'http://localhost:8000';

class Driver {
  async getDetail() {
    // waiting backend
    // let data = await axios.get(`${api}/api/truck/get-one/${id}`)
    // console.log(data);

    return {
    //  ...data,
      id: 'id1',
      driver_name: 'Abdul Rahman',
      phone_number: '0822 5189 158',
      created_at: '12-09-2022 15:00:00',
      status: 'status1',
    };
  }

  async getDrivers({ name } = {}) {
    // let data = await axios.get(`${api}/api/driver`)
    // console.log(data);

    let data = [
      {
        id: 'id1',
        driver_name: 'Abdul Rahman',
        phone_number: '0822 5189 158',
        created_at: '12-09-2022 15:00:00',
        status: 'Active',
      },
      {
        id: 'id2',
        driver_name: 'Rizki Gunardi',
        phone_number: '0822 222 333',
        created_at: '12-09-2022 16:00:00',
        status: 'Active',
      },
      {
        id: 'id3',
        driver_name: 'Hendi Ginanjar',
        phone_number: '0822 222 444',
        created_at: '12-09-2022 16:30:00',
        status: 'Inactive',
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
