export const formInputs = [
	{
		"name": "name",
		"label": "Имя",
		"type": "STRING",
		"max_length": 255,
		"min_length": 3,
		"regex": "^[a-zA-Z\s]+$"
	}, {
		"name": "surname",
		"label": "Фамилия",
		"type": "STRING",
		"max_length": 255,
		"min_length": 3,
		"regex": "^[a-zA-Z\s]+$"
	}, {
		"name": "age",
		"label": "Полных лет",
		"type": "NUMBER",
		"min": 1,
		"max": 100
	}, {
		"name": "email",
		"label": "Email",
		"type": "EMAIL"
	}
]