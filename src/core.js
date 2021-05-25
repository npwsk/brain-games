#!/usr/bin/env node
const maxGeneratedNumber = 100;

const generateNumber = () => Math.floor(Math.random() * maxGeneratedNumber);

export default generateNumber;
