export class Session implements SessionEntity {
	private readonly _sub: string
	private readonly _iss: string
	private readonly _iat: number
	private readonly _exp: number
	private readonly _aud: string

	constructor({ sub, iss, iat, exp, aud }: SessionEntity) {
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
}
