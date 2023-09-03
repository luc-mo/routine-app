import { InvalidUserError, InvalidUserErrorMessages } from './errors/invalidUserError'

export class User implements UserEntity {
	private _id: string
	private _email: string
	private _username: string
	private _password: string
	private _salt: string
	private _createdAt: number
	private _updatedAt: number

	constructor({ id, email, username, password, salt, createdAt, updatedAt }: UserEntity) {
		this._assertId(id)
		this._assertEmail(email)
		this._assertUsername(username)
		this._assertPassword(password)
		this._assertSalt(salt)
		this._id = id
		this._email = email
		this._username = username
		this._password = password
		this._salt = salt
		this._createdAt = createdAt
		this._updatedAt = updatedAt
	}

	// Getters
	get id(): string {
		return this._id
	}

	get email(): string {
		return this._email
	}

	get username(): string {
		return this._username
	}

	get password(): string {
		return this._password
	}

	get salt(): string {
		return this._salt
	}

	get createdAt(): number {
		return this._createdAt
	}

	get updatedAt(): number {
		return this._updatedAt
	}

	// Setters
	set id(value: string) {
		this._assertId(value)
		this._id = value
	}

	set email(value: string) {
		this._assertEmail(value)
		this._email = value
	}

	set username(value: string) {
		this._assertUsername(value)
		this._username = value
	}

	set password(value: string) {
		this._assertPassword(value)
		this._password = value
	}

	set salt(value: string) {
		this._assertSalt(value)
		this._salt = value
	}

	set createdAt(value: number) {
		this._createdAt = value
	}

	set updatedAt(value: number) {
		this._updatedAt = value
	}

	private _assertId(id: unknown) {
		if (!this._isValidUuid(id)) {
			throw new InvalidUserError(InvalidUserErrorMessages.INVALID_ID)
		}
	}

	private _assertEmail(email: unknown) {
		if (!this._isValidEmail(email)) {
			throw new InvalidUserError(InvalidUserErrorMessages.INVALID_EMAIL)
		}
	}

	private _assertUsername(username: unknown) {
		if (!this._isValidUsernameLength(username)) {
			throw new InvalidUserError(InvalidUserErrorMessages.INVALID_USERNAME)
		}
	}

	private _assertPassword(password: unknown) {
		if (!this._isValidPasswordLength(password)) {
			throw new InvalidUserError(InvalidUserErrorMessages.INVALID_PASSWORD)
		}
	}

	private _assertSalt(salt: unknown) {
		if (!this._isValidSaltLength(salt)) {
			throw new InvalidUserError(InvalidUserErrorMessages.INVALID_SALT)
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

	private _isValidEmail(email: unknown) {
		if (!this._isString(email)) return false
		const emailRegex = /^[a-z0-9._-]{3,}@[a-z0-9.-]{3,}\.[a-z]{2,}$/i
		return emailRegex.test(email as string)
	}

	private _isValidUsernameLength(username: unknown) {
		if (!this._isString(username)) return false
		return (username as string).length >= 4 && (username as string).length <= 25
	}

	private _isValidPasswordLength(password: unknown) {
		if (!this._isString(password)) return false
		return (password as string).length >= 9
	}

	private _isValidSaltLength(salt: unknown) {
		if (!this._isString(salt)) return false
		return (salt as string).length >= 16
	}
}
