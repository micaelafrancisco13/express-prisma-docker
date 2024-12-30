const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Create
app.post('/items', async (req, res) => {
    const { name } = req.body;
    console.log("name", name);
    const newItem = await prisma.item.create({ data: { name } });
    res.json(newItem);
});

// Read
app.get('/items', async (req, res) => {
    const items = await prisma.item.findMany();
    res.json(items);
});

// Update
app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedItem = await prisma.item.update({
        where: { id: parseInt(id) },
        data: { name },
    });
    res.json(updatedItem);
});

// Delete
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.item.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.POSTGRES_URL;
app.listen(PORT, () => {
    console.group("Production Environment")
    console.log(`Server running on port ${PORT}`)
    console.log(`Hosted on ${DATABASE_URL}`);
    console.groupEnd();
});
