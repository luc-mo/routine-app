import { describe, test, expect } from 'vitest'
import { Session, InvalidSessionError } from 'domain/Session'

describe('Instantiate session entity', () => {
	const VALID_SESSION: SessionEntity = {
		sub: '11111111-1111-1111-1111-111111111111',
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

	test('should throw an error if subject is not a string', () => {
		// @ts-expect-error
		expect(() => new Session({ ...VALID_SESSION, sub: 123 })).toThrow(InvalidSessionError)
	})

	test('should throw an error if subject is not a valid uuid', () => {
		expect(() => new Session({ ...VALID_SESSION, sub: '123' })).toThrow(InvalidSessionError)
	})

	test('should throw an error if issuer is not a string', () => {
		// @ts-expect-error
		expect(() => new Session({ ...VALID_SESSION, iss: 123 })).toThrow(InvalidSessionError)
	})

	test('should throw an error if issuer does not have the valid length', () => {
		expect(() => new Session({ ...VALID_SESSION, iss: 'ab' })).toThrow(InvalidSessionError)
		expect(() => new Session({ ...VALID_SESSION, iss: 'abcdefghijklmnop' })).toThrow(InvalidSessionError)
	})
})
