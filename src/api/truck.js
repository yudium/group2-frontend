import axios from 'axios';

const api = 'http://localhost:5000';

class Truck {
  getTruck = () => {
    return axios.get(`${api}/truck`);
  };
  addTruck = (newData) => {
    return axios.post(`${api}/api/truck/add`, { newData });
  };
  updateTruck = (updatedData) => {
    return axios.put(`${api}/truck`, { updatedData });
  };

  async getTruckTypes() {
    return ['Tronton', 'MPV'];
  }

  async getDetail(id) {
    // let data = await axios.get(`${api}/api/truck/get-one/${id}`);
    // console.log(data);

    return {
      // ...data,
      id: 'id',
      license_number: 'B 222 C',
      truck_type: 'Tronton',
      plate_type: 'Yellow',
      production_year: '2012',

      stnk: '',
      kir: '',
    };
  }

  async getTrucks({ truckTypesFilter, licenseNumber } = {}) {
    // let data = await axios.get(`${api}/api/truck/all`);
    // console.log(data);
    // data = data.data;
    let data = [
      {
        id: 'id',
        license_number: 'B 222 C',
        truck_type: 'Tronton',
        plate_type: 'Yellow',
        production_year: '2012',
      },
      {
        id: 'id',
        license_number: 'B 333 F',
        truck_type: 'Tronton',
        plate_type: 'Black',
        production_year: '2014',
      },
      {
        id: 'id',
        license_number: 'B 444 Z',
        truck_type: 'MPV',
        plate_type: 'Black',
        production_year: '2016',
      },
    ];

    // search by license
    if (licenseNumber) {
      data = data.filter((t) => {
        return t.license_number.includes(licenseNumber.trim());
      });
    }

    if (Array.isArray(truckTypesFilter) && truckTypesFilter.length > 0) {
      data = data.filter((t) => truckTypesFilter.includes(t.truck_type));
    }

    return data;
  }
}

const truck = new Truck();
export default truck;
