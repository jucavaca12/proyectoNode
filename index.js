//const express = require("express");
import express from 'express';
import dataBase from './database/DatabaseSQL.js';

const app = express();

app.listen(3100, () => console.log("servidor corriendo en el puerto  3100"));
