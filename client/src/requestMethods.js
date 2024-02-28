import axios from 'axios'

const BASE_URL="http://localhost:3000/api"

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTM1YjA1NWU2ODk1OGVjMmE2ZGU1MDkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTgxNzcyNjIsImV4cCI6MTcwMDc2OTI2Mn0.db8ORdHQF5K4SheIencYv6kIBiMRSCResYeiEHmbYoc"

export const publicRequest=axios.create({
    baseURL: BASE_URL
})
export const userRequest=axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})
