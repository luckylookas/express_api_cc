/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */
/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */
/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */
/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */
/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */
/* DON'T DO THIS. DON'T READ IT. DON'T REMEMBER ANY OF IT. THIS IS UNSAFE AND A BAD IDEA. ALL OF IT. */

const store = {
    1: { name: "Lukas", age: "32"}
}

const getByAge = (age) => {
    return Object.values(store).filter(it => it.age === age)
}

const get = (id) => {
    if (!id) {
        return Object.keys(store).map(key => ({...store[key], id: key}))
    }
    return store[id]
}

const updateOrInsert = (person, id) => {
    let activeId = id
    while (!activeId || (activeId !== id && !!store[activeId])) {
        activeId = Math.round(((Math.random() / Math.random()) * 1000000))
    }
    store[activeId] = person
    return activeId
}

const update = updateOrInsert
const insert = updateOrInsert

const remove = (id) => {
    delete store[id]
}

export default {get, update, insert, remove, getByAge}
