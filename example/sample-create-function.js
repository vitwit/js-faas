const express = require('express')
const request = require('request')
const JsFass = require('./../JsFass')
const axios = require('axios')

const app = express()
const port = 3000
const faasSDK = new JsFass();

app.get('/', (req, res) => {
	faasSDK.getFunctions()
		.then(response => {
			console.log('response', response)

			res.send({
				status: response.error? 'error' : 'success',
				data: response.data,
				error: response.error
			})
		})
		.catch(e => {
			console.log('error', e)

			res.send({
				status: 'error',
				error: e
			})
		})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
