export class InvalidSessionError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'InvalidSessionError'
	}
}

export enum InvalidSessionErrorMessages {
	INVALID_SUBJECT = 'Property "sub" is required and must be a string in UUID format',
	INVALID_ISSUER = 'Property "iss" is required and must be a string with at least 3 characters and a maximum of 15',
	INVALID_ISSUED_AT = 'Property "iat" is required and must be a positive integer',
	INVALID_EXPIRATION = 'Property "exp" is required and must be a positive integer',
	INVALID_AUDIENCE = 'Property "aud" is required and must be a string with at least 3 characters and a maximum of 15',
}
