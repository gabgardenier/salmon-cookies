'use strict';

const express = require('express');
const app = express();
const PORt = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
} );