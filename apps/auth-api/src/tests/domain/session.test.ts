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

	test('should throw an error if issued at is not a number', () => {
		// @ts-expect-error
		expect(() => new Session({ ...VALID_SESSION, iat: '123' })).toThrow(InvalidSessionError)
	})

	test('should throw an error if issued at is not a positive number', () => {
		expect(() => new Session({ ...VALID_SESSION, iat: -1 })).toThrow(InvalidSessionError)
		expect(() => new Session({ ...VALID_SESSION, iat: 0.1 })).toThrow(InvalidSessionError)
	})

	test('should throw an error if expiration is not a number', () => {
		// @ts-expect-error
		expect(() => new Session({ ...VALID_SESSION, exp: '123' })).toThrow(InvalidSessionError)
	})

	test('should throw an error if expiration is not a positive number', () => {
		expect(() => new Session({ ...VALID_SESSION, exp: -1 })).toThrow(InvalidSessionError)
		expect(() => new Session({ ...VALID_SESSION, exp: 0.1 })).toThrow(InvalidSessionError)
	})

	test('should throw an error if audience is not a string', () => {
		// @ts-expect-error
		expect(() => new Session({ ...VALID_SESSION, aud: 123 })).toThrow(InvalidSessionError)
	})

	test('should throw an error if audience does not have the valid length', () => {
		expect(() => new Session({ ...VALID_SESSION, aud: 'ab' })).toThrow(InvalidSessionError)
		expect(() => new Session({ ...VALID_SESSION, aud: 'abcdefghijklmnop' })).toThrow(InvalidSessionError)
	})
})
