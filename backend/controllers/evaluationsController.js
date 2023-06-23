/**
 * @module EvaluationsController
 */
import EvalForm from '../models/evalForm.js';

/**
 * Gets the parameters from the request body and returns them in an JSON object
 * @MingCWang
 * @param {Object} body - request body
 * @returns {{course: string, semester: string, professor: string, difficulty: number, rate: number, attendance: string, gradeRecieved: string, delivery: string, comment: string}} - JSON object with the parameters
 */
const getEvalFormParams = (body) => {
	const { course, semester, professor, difficulty, rate, attendance, gradeRecieved, delivery, comment } = body;
	return {
		course,
		semester,
		professor,
		difficulty,
		rate,
		attendance,
		gradeRecieved,
		delivery,
		comment
	};
};

/**
 * @summary POST api/v1/evaluations/forms
 * @description Creates a new EvalForm
 * 
 * Example request body:
 * 
 * {
 *    "course": "COSI-103",
 *    "semester": "SPRING",
 *    "professor": "Timothy Hickey",
 *    "difficulty": "easy", 
 *    "rate": 5,
 *    "attendance": true,
 *    "grade-received": "A",
 *    "delivery": "In-Person", 
 *    "comment": "good"
 * }
 * @MingCWang 
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} 201 - JSON object with the created EvalForm
 * @returns {Object} 500 - JSON object with the error message
 */
async function create(req, res) {
	try {
		const newEvalForm = new EvalForm(getEvalFormParams(req.body));
		const savedEvalForm = await newEvalForm.save();
		res.status(201).json(savedEvalForm);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

/**
 * @todo Implement error handling for edge cases
 * @summary GET api/v1/evaluations?course=course&semester=semester&professor=professor
 * @description Gets all EvalForms filtered with the given parameters    
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function read(req, res) {

	const { course, semester, professor } = req.query;
	let evalForms = [];
	try {
		if (semester) {
			evalForms = await EvalForm.find({ course: course, semester: semester });
		} else if (professor) {
			evalForms = await EvalForm.find({ course: course, professor: professor });
		} else {
			evalForms = await EvalForm.find({ course: course });
		}
		res.status(200).json(evalForms);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export { create, read };