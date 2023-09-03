import { describe, test, expect } from 'vitest'
import { User, InvalidUserError } from 'domain/User'

describe('Instantiate user entity', () => {
	const VALID_USER: UserEntity = {
		id: '11111111-1111-1111-1111-111111111111',
		email: 'myemail@authapi.com',
		username: 'myusername',
		password: 'mypassword',
		createdAt: 123456789,
		updatedAt: 123456789,
		salt: 'abcdefghijklmnop',
	}

	test('should be a function', () => {
		expect(typeof User).toBe('function')
	})

	test('should return an object', () => {
		const user = new User(VALID_USER)
		expect(typeof user).toBe('object')
	})

	test('should throw an error if id is not a string', () => {
		// @ts-expect-error
		expect(() => new User({ ...VALID_USER, id: 123 })).toThrow(InvalidUserError)
		expect(() => {
			const user = new User({ ...VALID_USER })
			// @ts-expect-error
			user.id = 123
		}).toThrow(InvalidUserError)
	})

	test('should throw an error if id is not a valid uuid', () => {
		expect(() => new User({ ...VALID_USER, id: '123' })).toThrow(InvalidUserError)
		expect(() => {
			const user = new User({ ...VALID_USER })
			user.id = '123'
		}).toThrow(InvalidUserError)
	})

	test('should throw an error if email is not a string', () => {
		// @ts-expect-error
		expect(() => new User({ ...VALID_USER, email: 123 })).toThrow(InvalidUserError)
		expect(() => {
			const user = new User({ ...VALID_USER })
			// @ts-expect-error
			user.email = 123
		}).toThrow(InvalidUserError)
	})

	test('should throw an error if email is not a valid email', () => {
		expect(() => new User({ ...VALID_USER, email: '123' })).toThrow(InvalidUserError)
		expect(() => {
			const user = new User({ ...VALID_USER })
			user.email = '123'
		}).toThrow(InvalidUserError)
	})
})
