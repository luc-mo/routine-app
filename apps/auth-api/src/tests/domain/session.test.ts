import { describe, test, expect } from 'vitest'
import { Session } from 'domain/Session'

describe('Instantiate session entity', () => {
	const VALID_SESSION: SessionEntity = {
		sub: '123',
		iss: 'auth-api',
		exp: 1234567890,
		iat: 1234567890,
		aud: 'routine-app',
	}

	test('should be a function', () => {
		expect(typeof Session).toBe('function')
	})

	test('should return an object', () => {
		const session = new Session(VALID_SESSION)
		expect(typeof session).toBe('object')
	})
})
