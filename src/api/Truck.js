import axios from 'axios'
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
}

export default Truck