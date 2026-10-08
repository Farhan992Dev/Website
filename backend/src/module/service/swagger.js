/**
 * @swagger
 * tags:
 *  - name: Service
 */

/**
 * @swagger
 * components:
 *  schemas:
 *     CreateService:
 *        type: object
 *        required:
 *           - title
 *           - description
 *           - link
 *           - tags
 *           - type
 *           - image
 *        properties:
 *          title:
 *            type: string
 *          description:
 *            type: string
 *          type:
 *            type: string
 *          link:
 *            type: string
 *          categoryId:
 *            type: string
 *          image:
 *            type: string
 *            format: binary
 *          tags:
 *            type: array
 *            items:
 *              type: string
 */

/**
 * @swagger
 * /service/create:
 *   post:
 *     summary: Create service
 *     tags:
 *       - Service
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CreateService'
 *     responses:
 *       200:
 *         description: create service
 */

/**
 * @swagger
 * /service/getAllService:
 *   get:
 *     summary: get service
 *     tags:
 *       - Service
 *     responses:
 *      200:
 *        description: get service
 */
