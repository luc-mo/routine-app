import { describe, test, expect } from 'vitest'
import { User } from 'domain/User'

describe('Instantiate user entity', () => {
	const VALID_USER: UserEntity = {
		id: '11111111-1111-1111-1111-111111111111',
		email: 'myemail@authapi.com',
		username: 'myusername',
		password: 'mypassword',
		createdAt: 123456789,
		updatedAt: 123456789,
		salt: 'mysalt',
	}

	test('should be a function', () => {
		expect(typeof User).toBe('function')
	})

	test('should return an object', () => {
		const user = new User(VALID_USER)
		expect(typeof user).toBe('object')
	})
})
