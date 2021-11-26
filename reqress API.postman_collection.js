{
	"info": {
		"_postman_id": "b969dfd1-0bba-4b22-a28d-ba4b7d7675a9",
		"name": "reqress API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "list users",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Body is correct\", function () {\r",
							"    pm.response.to.have.body(\"\");\r",
							"});\r",
							"\r",
							"pm.test(\"Status code name has string\", function () {\r",
							"    pm.response.to.have.status(\"OK\");\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://reqres.in/api/users?page=2",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"users"
					],
					"query": [
						{
							"key": "page",
							"value": "2"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "create user",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code should be 201\", function () {\r",
							"    pm.response.to.have.status(201);\r",
							"});\r",
							"pm.test(\"Content-Type is present\", function () {\r",
							"    pm.response.to.have.header(\"Content-Type\");\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"lucy\",\r\n    \"job\": \"doctor\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://reqres.in/api/users",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "SINGLE USER FOUND",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code should be 404\", function () {\r",
							"    pm.response.to.have.status(404);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://reqres.in/api/users/23",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"users",
						"23"
					]
				}
			},
			"response": []
		},
		{
			"name": "list<resource>",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code should be 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 200ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(200);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://reqres.in/api/unknown",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"unknown"
					]
				}
			},
			"response": []
		},
		{
			"name": "Single <reource>",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Body matches string\", function () {\r",
							"    pm.expect(pm.response.text()).to.include(\"2001\");\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://reqres.in/api/unknown/2",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"unknown",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "Single <resource> not found",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Content-Type is present\", function () {\r",
							"    pm.response.to.have.header(\"server\");\r",
							"});\r",
							"pm.test(\"Status code should be  404\", function () {\r",
							"    pm.response.to.have.status(404);\r",
							"});\r",
							"\r",
							"pm.test(\"Status code name has string\", function () {\r",
							"    pm.response.to.have.status(\"Not Found\");\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://reqres.in/api/unknown/23",
					"protocol": "https",
					"host": [
						"reqres",
						"in"
					],
					"path": [
						"api",
						"unknown",
						"23"
					]
				}
			},
			"response": []
		}
	]
}