import { api } from './api'

export async function getRandomUser() {
    try {
        const resultado = await api.get()
        return resultado.data.results[0]
    } catch (error) {
        console.log(error)
        return {}
    }
}