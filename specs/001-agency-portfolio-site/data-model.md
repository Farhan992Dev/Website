# Data Model: Agency Portfolio Website

## Entities

### ServiceOffering

Represents a service the company promotes on the public site.

Fields:
- `id`: stable identifier
- `slug`: URL-safe name
- `title`: localized display name
- `summary`: short localized description
- `featured`: whether the service is highlighted on the homepage

Validation rules:
- Each service must have both Persian and English copy.
- The homepage should highlight the primary services only.

### CompanyProfile

Represents the public identity and positioning of the business.

Fields:
- `name`: company name
- `tagline`: short positioning statement
- `about`: localized company story
- `advantages`: localized list of reasons to choose the company
- `contactChannels`: direct contact buttons such as phone, email, or messaging links

Validation rules:
- About and positioning content must be available in both locales.
- Contact channels must be easy to surface from every major section.

### LanguageVersion

Represents one locale version of the same content.

Fields:
- `locale`: `fa` or `en`
- `dir`: `rtl` or `ltr`
- `content`: localized copy bundle

Validation rules:
- Persian content must render with RTL direction.
- English content must render with LTR direction.

### ContactInquiry

Represents a lead submitted through the contact form.

Fields:
- `fullName`
- `email`
- `phone` or `messagingHandle` when provided
- `serviceInterest`
- `message`
- `locale`
- `submittedAt`

Validation rules:
- Name, contact method, and message should be required.
- Email must be valid if provided or required by the chosen submission flow.
- The form should reject obviously malformed submissions before sending.

## Relationships

- A `CompanyProfile` contains multiple `ServiceOffering` items.
- Each public page or section consumes one `LanguageVersion` per supported locale.
- A `ContactInquiry` may reference the service the visitor is interested in.

## Notes

- This feature does not require a persistent application database for public content.
- If form submissions are stored, they should be handled separately from public page content.