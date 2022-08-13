class Truck {
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

const truck = new Truck();

export default truck;