import Course from '../models/course.js';
import User from '../models/user.js';

/**
 * This controller adds a course to the likedCourses array of a user when the user clicks the like button
 * 
 * Example request body:
 * {
 *     "courseId": "64d1f443ecc04ec2ba2f455e",
 *     "userId": "64c615e6e1f19654ea691ab6"
 * }
 * @param {*} req 
 * @param {*} res 
 */
export const add = async (req, res) => {
	let { courseId } = req.body;
	const { userId } = req.body;
	let liked
	try {
		liked = await User.findById(userId).select('likedCourses');
		const duplicated = liked.likedCourses.includes(courseId);
		if (duplicated) {
			res.status(200).json({ message: 'Course already liked' });
			return;
		}
		const result = await User.findByIdAndUpdate(userId, { $push: { likedCourses: courseId } }, { new: true })
		if(result) res.status(200).json(result);
		else res.status(404).json({ error: 'Course not found'});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

/**
 * This controller removes a course from the likedCourses array of a user when the user clicks the like button
 * @param {*} req
 * @param {*} res
 */
export const remove = async (req, res) => {
	const { courseId } = req.body;
	const { userId } = req.body;
	try {
		const result = await User.findByIdAndUpdate(userId, { $pull: { likedCourses: courseId } }, { new: true })
		res.status(200).json(result);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

/**
 * This controller returns the likedCourses array of a user
 * @param {*} req
 * @param {*} res
 */
export const get = async (req, res) => {
	const { userId } = req.body;
	try {
		const likedCourses = User.findById(userId).likedCourses;
		res.status(200).json(likedCourses);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

