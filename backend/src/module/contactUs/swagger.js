/**
 * @swagger
 * tags:
 *  - name: ContactUs
 */

/**
 * @swagger
 * components:
 *  schemas:
 *     CreateContactUs:
 *        type: object
 *        required:
 *           - phoneNumber
 *           - nameFamily
 *           - email
 *           - service
 *           - description
 *        properties:
 *          phoneNumber:
 *            type: string
 *          nameFamily:
 *            type: string
 *          email:
 *            type: string
 *          service:
 *            type: string
 *          description:
 *            type: string
 */

/**
 * @swagger
 * /contactUs/create:
 *   post:
 *     summary: Create contactUs
 *     tags:
 *       - ContactUs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateContactUs'
 *     responses:
 *       200:
 *         description: create contactUs
 */

/**
 * @swagger
 * /contactUs/getAllContactUs:
 *   get:
 *     summary: get ContactUs
 *     tags:
 *       - ContactUs
 *     responses:
 *      200:
 *        description: get ContactUs
 */
