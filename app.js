const express = require('express');
require('./Database/database');

const UniversityRoutes = require('./routes/UniversityRoutes');
const TypeProjectRoutes = require('./routes/TypeProjectRoutes');
const StageProjectRoutes = require('./routes/StageProjectRoutes');
const ProjectRoutes = require('./routes/ProjectRoutes');

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
res.send('Hello world');
});

async function aplication() {
    await app.listen(4321);
    console.log("Mi puerto es el 4321");
}

app.use('/universities', UniversityRoutes);
app.use('/typeprojects', TypeProjectRoutes);
app.use('/stageprojects', StageProjectRoutes);
app.use('/projects', ProjectRoutes);

aplication();