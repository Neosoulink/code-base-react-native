// This file contain rule validation constants for validate.js

/**
 * Require a non-empty field
 */
export const NOT_ALLOW_EMPTY_PRESENCE = {
	allowEmpty: false,
};

// TODO: Add some useful comments
export const TEL_PATTERN =
	// eslint-disable-next-line @typescript-eslint/quotes, quotes,
	`(\\+\\d{1,2}\\s?)?1?-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}`;

export const EMAIL_PATTERN =
	// eslint-disable-next-line max-len, @typescript-eslint/quotes, quotes
	`(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})`;

export const NUMERIC_FORMAT = {
	pattern: /^[0-9]+$/,
};

export const REQUIRE_NOT_EMPTY_PRESENCE = {
	presence: NOT_ALLOW_EMPTY_PRESENCE,
};

export const REQUIRE_EMAIL = {
	...REQUIRE_NOT_EMPTY_PRESENCE,
	email: true,
};

export const REQUIRE_TEL = {
	format: {
		pattern: `^${TEL_PATTERN}$`,
		flags: 'i',
	},
};

export const REQUIRE_CREDENTIAL = {
	...REQUIRE_NOT_EMPTY_PRESENCE,
	format: {
		pattern: `^(${TEL_PATTERN})|(${EMAIL_PATTERN})$`,
		flags: 'i',
	},
};

export const REQUIRE_NUMERIC = {
	format: {
		...NUMERIC_FORMAT,
	},
	strict: true,
};

export const REQUIRE_NUMERIC_NOT_STRICK = {
	format: {
		...NUMERIC_FORMAT,
	},
	strict: false,
};
