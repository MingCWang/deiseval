
import mongoose from 'mongoose';

/**
 * Set up mongodb connection and start the server
 */
mongoose.
	connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/course-eval', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`mongodb is connected on location: ${mongoose.connection.host}:${mongoose.connection.port}`);
	})
	.catch((err) => {
		console.log(`mongodb connection failed ${err}`);
	});

// upload mock data

import Course from './models/course.js';
import courseData from './data/courses.json' assert { type: 'json' };

const data = courseData.courses;
async function uploadData() {
	try {
		await Course.deleteMany({});
		await Course.insertMany(data);
		console.log('Data import success');
		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

uploadData();