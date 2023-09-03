export class InvalidSessionError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'InvalidSessionError'
	}
}

export enum InvalidSessionErrorMessages {
	INVALID_SUBJECT = 'Property "sub" must be a string in UUID format',
}
