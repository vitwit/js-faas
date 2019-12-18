const express = require('express')
const request = require('request')
const JsFass = require('./../JsFass')
const axios = require('axios')

const app = express()
const port = 3000
const faasSDK = new JsFass();

app.get('/', (req, res) => {
	faasSDK.getFunctions()
		.then(response => console.log('response', response))
		.catch(e => console.log('error', e))

	res.send('Hello World!')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
