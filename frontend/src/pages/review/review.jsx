/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { format } from '../../utils/formatSentence.js';
import styles from './review.module.css';
import DropdownSelection from './components/DropdownSelection.jsx';
import RatingButtons from './components/RatingButtons.jsx';
import AttendanceButtons from './components/AttendanceButtons.jsx';
import DeliveryButtons from './components/DeliveryButtons.jsx';
import TextBox from './components/TextBox.jsx';
import LetterGradeDropdown from './components/LetterGradeDropdown.jsx';

/**
 * TO DO: write api request to submit form data to backend
 * @returns {JSX.Element} Review page
 */
export default function Review() {
	const { course } = useParams();
	const [difficulty, setDifficulty] = useState(3);
	const [quality, setQuality] = useState(3);
	const [attendance, setAttendance] = useState(1);
	const [delivery, setDelivery] = useState('In Person');
	const [grade, setGrade] = useState('');
	const [professor, setProfessor] = useState('');
	const [semester, setSemester] = useState('');
	const [comment, setComment] = useState('');

	// TODO: get semesters and professor values from backend
	const semesters = [
		{ label: 'FALL 2021', value: 'FALL 2021' },
		{ label: 'SPRING 2021', value: 'SPRING 2021' },
		{ label: 'FALL 2020', value: 'FALL 2020' },
		{ label: 'SPRING 2020', value: 'SPRING 2020' },
		{ label: 'FALL 2019', value: 'FALL 2019' },
		{ label: 'SPRING 2019', value: 'SPRING 2019' },
		{ label: 'FALL 2018', value: 'FALL 2018' },
		{ label: 'SPRING 2018', value: 'SPRING 2018' },
		{ label: 'FALL 2017', value: 'FALL 2017' },
	];
	const professors = [
		{ label: 'Professor 1', value: 'Professor 1' },
		{ label: 'Professor 2', value: 'Professor 2' },
		{ label: 'Professor 3', value: 'Professor 3' },
	]

	const letterGrades = [
		{ label: 'A+', value: 'A+' },
		{ label: 'A', value: 'A' },
		{ label: 'A-', value: 'A-' },
		{ label: 'B+', value: 'B+' },
		{ label: 'B', value: 'B' },
		{ label: 'B-', value: 'B-' },
		{ label: 'C+', value: 'C+' },
		{ label: 'C', value: 'C' },
		{ label: 'C-', value: 'C-' },
		{ label: 'D+', value: 'D+' },
		{ label: 'D', value: 'D' },
		{ label: 'D-', value: 'D-' },
		{ label: 'F', value: 'F' },
		{ label: 'Prefer not to say', value: ''}
	];

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleProfessorChange(event, value) {
		setProfessor(value)
		console.log({professor})
	}
	function handleSemesterChange(event, value) {
		setSemester(value)
	}
	function handleCommentChange(event, value) {
		setComment(value)
	}
	function handleGradeChange(event, value) {
		setGrade(value)
	}


	return (
		<div className={styles.review}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>
					<span className={styles.titleSpan}>Rate: </span>
					{format(course)}
				</h1>
			</div>
			<div className={styles.reviewContainer}>
				<form className={styles.form}>
					<div className={styles.dropdownWrapper}>
						<DropdownSelection options={semesters} label="Select Semester" handleChange={handleSemesterChange} />
						<DropdownSelection options={professors} label="Select Professor" handleChange={handleProfessorChange}/>
					</div>
					<div className={styles.ratingWrapper}>
						<h2 className={styles.ratingDesc}>Rate the difficulty of this course</h2>
						<RatingButtons state={difficulty} setState={setDifficulty} />
					</div>
					<div className={styles.ratingWrapper}>
						<h2 className={styles.ratingDesc}>Rate the quality of this course</h2>
						<RatingButtons state={quality} setState={setQuality} />
					</div>
					<div className={styles.ratingWrapper}>
						<h2 className={styles.ratingDesc}>Attendance is requried</h2>
						<AttendanceButtons state={attendance} setState={setAttendance} />
					</div>
				
					<div className={styles.ratingWrapper}>
						<h2 className={styles.ratingDesc}>Delivery mode</h2>
						<DeliveryButtons state={delivery} setState={setDelivery} />
					</div>
					<div className={styles.ratingWrapper}>
						<h2 className={styles.ratingDesc}>Your grade (optional)</h2>
						<LetterGradeDropdown options={letterGrades} label="grade" handleGradeChange={handleGradeChange} />
					</div>
					<div className={styles.dividerContainer}><div className={styles.divider} /></div>

					<div className={styles.commentWrapper}>
						<h2 className={styles.ratingDesc}>Your Comment:</h2>
						<div className={styles.textBoxContainer}>
							<TextBox setComment={setComment} handleCommentChange={handleCommentChange} />
						</div>
					</div>
					<div className={styles.submit}>
						<button className={styles.submitButton} type="submit" onClick={handleSubmit} >Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}