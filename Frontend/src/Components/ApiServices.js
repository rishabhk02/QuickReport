import axios from "axios";
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Auth Services
export function register(data) {
    return axios.post("http://localhost:5800/register", data);
}

export function verifyotp(data) {
    return axios.post("http://localhost:5800/register/verify", data)
}

export function login(data) {
    return axios.post("http://localhost:5800/login", data)
}

// Complain Services
export function registerVehicleComplain(data) {
    return axios.post("http://localhost:5800/addVehicleComplain", data, {
        headers: {
            Authorization: `Bearer ${loggedInUser.token}`
        }
    });
}

export function registerGeneralTheftComplain(data) {
    return axios.post("http://localhost:5800/addGeneralTheftComplain", data, {
        headers: {
            Authorization: `Bearer ${loggedInUser.token}`
        }
    });
}

export function registerKidnappingComplain(data) {
    return axios.post("http://localhost:5800/addKidnappingComplain", data, {
        headers: {
            Authorization: `Bearer ${loggedInUser.token}`
        }
    });
}

export function saveCharcterInfo(data) {
    return axios.post(`http://localhost:5800/save/charcterverify`, data)
}
export function saveAddress(data) {
    return axios.post("http://localhost:5800/save/address", data)
}
export function saveWitness(data) {
    return axios.post("http://localhost:5800/save/witness", data)
}
export function savePgtenant(data) {
    return axios.post("http://localhost:5800/save/pgverify", data)
}
export function updateuserKidnapingReport(id, obj) {
    return axios.put(`http://localhost:5800/complaint/user/kdinapingreport/${id}/${obj}`)
}
export async function updatePoliceStationTOuser(id, obj) {
    return axios.put(`http://localhost:5800/update/policestation/user/${id}/${obj}`)
}

export function updateuserGeneralThiftFir(id, obj) {
    return axios.put(`http://localhost:5800/complaint/user/generaltheft/${id}/${obj}`)
}
export function updatePoliceStationToCharcter(id, obj) {
    return axios.put(`http://localhost:5800/update/policestation/characterverify/${id}/${obj}`)
}
export function updateCharcterToAddress(id, obj) {
    return axios.put(`http://localhost:5800/update/charcter/address/${id}/${obj}`)
}

export function updateCharcterToWitnes(id, obj) {
    return axios.put(`http://localhost:5800/update/charcter/witness/${id}/${obj}`)
}
export function updatePgPoliceStation(id, obj) {
    return axios.put(`http://localhost:5800/update/policestation/pgverify/${id}/${obj}`)
}
export function getDepartementData() {
    return axios.get("http://localhost:5800/");
}
