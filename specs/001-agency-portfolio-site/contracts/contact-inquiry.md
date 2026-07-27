# Contact Inquiry Contract

## Purpose

Defines the contact form payload for the public lead-capture flow.

## Submission fields

- `fullName`: required string
- `email`: required string in valid email format
- `phone`: optional string
- `serviceInterest`: optional string
- `message`: required string
- `locale`: required string, `fa` or `en`

## Behavior

- Validation should happen client-side before submit and again on the server.
- Errors should be localized to the current language.
- The submit action should fail safely if required fields are missing or malformed.

## Response expectations

- Success: acknowledge the inquiry and keep the user on the same locale.
- Failure: show a non-technical error and preserve entered values where possible.