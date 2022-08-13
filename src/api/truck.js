import axios from 'axios';

const api = 'http://localhost:5000'

class Truck {
    constructor(licenseNumber, licenseType, truckType, productionYear, stnk, kir) {
        this.licenseNumber = licenseNumber
        this.licenseType = licenseType
        this.truckType = truckType
        this.productionYear = productionYear
        this.stnk = stnk
        this.kir = kir
    }
    getTruck = () => {
        return axios.get(`${api}/truck`).then(res => {
            console.log(res)
            this.licenseNumber = res.data.licenseNumber
            this.licenseType = res.data.licenseType
            this.truckType = res.data.truckType
            this.productionYear = res.data.productionYear
            this.stnk = res.data.stnk
            this.kir = res.data.kir
        }).catch(err => {
            console.log(err)
        })
    }
    addTruck = () => {
        return axios.post(`${api}/truck`, {
            licenseNumber: this.licenseNumber,
            licenseType: this.licenseType,
            truckType: this.truckType,
            productionYear: this.productionYear,
            stnk: this.stnk,
            kir: this.kir
        })
    }
    updateTruck = () => {
        return axios.put(`${api}/truck`, {
            licenseNumber: this.licenseNumber,
            licenseType: this.licenseType,
            truckType: this.truckType,
            productionYear: this.productionYear,
        })
    }

  async getTruckTypes() {
    return ['truck_type1', 'truck_type2'];
  }

  async getTrucks({ truckTypesFilter, licenseNumber } = {}) {
    let data = [
      {
        id: 'id',
        license_number: 'license_number1',
        truck_type: 'truck_type1',
        plate_type: 'plate_type1',
        production_year: 'production_year1',
      },
      {
        id: 'id',
        license_number: 'license_number1',
        truck_type: 'truck_type1',
        plate_type: 'plate_type1',
        production_year: 'production_year1',
      },
      {
        id: 'id',
        license_number: 'license_number2',
        truck_type: 'truck_type2',
        plate_type: 'plate_type2',
        production_year: 'production_year2',
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

const truck = new Truck()

export default truck