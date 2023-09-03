export class InvalidUserError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'InvalidUserError'
	}
}

export enum InvalidUserErrorMessages {
	INVALID_ID = 'Property "id" is required and must be a string in UUID format',
	INVALID_EMAIL = 'Property "email" is required and must be a valid email',
	INVALID_USERNAME = 'Property "username" is required and must be a string with at least 4 characters and a maximum of 25',
	INVALID_PASSWORD = 'Property "password" is required and must be a string with at least 9 characters',
	INVALID_SALT = 'Property "salt" is required and must be a string with at least 16 characters',
	INVALID_CREATED_AT = 'Property "createdAt" is required and must be a positive integer',
	INVALID_UPDATED_AT = 'Property "updatedAt" is required and must be a positive integer',
}
