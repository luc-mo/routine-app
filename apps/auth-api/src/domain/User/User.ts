export class User implements UserEntity {
	private _id: string
	private _email: string
	private _username: string
	private _password: string
	private _salt: string
	private _createdAt: number
	private _updatedAt: number

	constructor({ id, email, username, password, salt, createdAt, updatedAt }: UserEntity) {
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
		this._id = value
	}

	set email(value: string) {
		this._email = value
	}

	set username(value: string) {
		this._username = value
	}

	set password(value: string) {
		this._password = value
	}

	set salt(value: string) {
		this._salt = value
	}

	set createdAt(value: number) {
		this._createdAt = value
	}

	set updatedAt(value: number) {
		this._updatedAt = value
	}
}
