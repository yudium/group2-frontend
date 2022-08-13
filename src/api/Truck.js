import axios from 'axios'
class Truck {
    getTruck = () => {
        return axios.get(`${api}/truck`)
    }
    addTruck = (newData) => {
        return axios.post(`${api}/truck`, { newData })
    }
    updateTruck = (updatedData) => {
        return axios.put(`${api}/truck`, { updatedData }) 
    }      
}

const Truck = new Truck();
export default Truck