/**
 * @swagger
 * tags:
 *  - name: Category
 */

/**
 * @swagger
 * components:
 *  schemas:
 *     CreateCategory:
 *        type: object
 *        required:
 *           - title
 *        properties:
 *          title:
 *            type: string
 */

/**
 * @swagger
 * /category/create:
 *   post:
 *     summary: Create category
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCategory'
 *     responses:
 *       200:
 *         description: create category
 */

/**
 * @swagger
 * /category/getAll:
 *   get:
 *     summary: get category
 *     tags:
 *       - Category
 *     responses:
 *      200:
 *        description: get category
 */
