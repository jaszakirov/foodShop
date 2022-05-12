const express = require(`express`);
const app = express()
const fruits = [
    { id: 1, name: `Яблоки` },
    { id: 2, name: `Грушы` },
    { id: 3, name: `Черешня` },
    { id: 4, name: `Вишня` }
]
const vegitables = [
    { id: 1, name: `Помидоры` },
    { id: 2, name: `Картошка` },
    { id: 3, name: `Морковь` },
    { id: 4, name: `Огурцы` }
]
const milkproducts = [
    { id: 1, name: `Молоко mussafo` },
    { id: 2, name: `Творог` },
    { id: 3, name: `Бринза` },
    { id: 4, name: `Сыр` }
]
app.get(`/api/fruits`, (req, res) => {
    res.send(fruits)
})
app.get(`/api/fruits/:id`, (req, res) => {
    const fruit = fruits.find(f => f.id === +req.params.id)
    if(!fruit){
        res.status(404).send(`berilgan id ga tegishli fruit topilmadi`)
    }
    res.send(fruit)
})
app.get(`/api/fruits/:name`, (req, res) => {
    const fruitName = fruits.find(f => f.name === req.params.name)
    if(!fruitName){
        res.status(404).send(`berilgan name ga tegishli fruit topilmadi`)
    }
    res.send(fruitName)
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`${port}chi portda eshitishni boshladim...`);
})