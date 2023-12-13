import axios from "axios"

const objectsAPI = axios.create({ baseURL: "http://localhost:3001/objetos" })

async function getObjects() {
    const response = await objectsAPI.get('/')

    return response.data
}

async function getObject(id) {
    const response = await objectsAPI.get(`/${id}`)

    return response.data
}

async function postObject(object) {
    await objectsAPI.post(`/`, JSON.stringify(object),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}


async function patchObject(id, object) {
    await objectsAPI.patch(`/${id}`, JSON.stringify(object),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}


async function deleteObject(id) {
    await objectsAPI.delete(`/${id}`)
}

export {
    getObjects,
    getObject,
    deleteObject,
    postObject,
    patchObject
}