import { InvalidSessionError, InvalidSessionErrorMessages } from './errors/invalidSessionError'

export class Session implements SessionEntity {
	private readonly _sub: string
	private readonly _iss: string
	private readonly _iat: number
	private readonly _exp: number
	private readonly _aud: string

	constructor({ sub, iss, iat, exp, aud }: SessionEntity) {
		this._assertSubject(sub)
		this._sub = sub
		this._iss = iss
		this._iat = iat
		this._exp = exp
		this._aud = aud
	}

	get sub(): string {
		return this._sub
	}

	get iss(): string {
		return this._iss
	}

	get iat(): number {
		return this._iat
	}

	get exp(): number {
		return this._exp
	}

	get aud(): string {
		return this._aud
	}

	private _assertSubject(subject: unknown) {
		if (!this._isString(subject) || !this._isValidUuid(subject)) {
			throw new InvalidSessionError(InvalidSessionErrorMessages.INVALID_SUBJECT)
		}
	}

	private _isString(value: unknown) {
		return typeof value === 'string'
	}

	private _isValidUuid(uuid: unknown) {
		if (!this._isString(uuid)) return false
		const uuidRegex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i
		return uuidRegex.test(uuid as string)
	}
}
