import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import styles from './SearchBar.module.css';

export default function SearchBar({ handleClick }) {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?course=${text}`);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
        if (event.target.value.length > 0) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };
    return (
        <div className={styles.searchReview}>
            <form
                action=''
                onSubmit={handleSubmit}
                className={styles.searchBar}
            >
                <div className={styles.container}>
                    <div className={styles.title}>Search a course!</div>
                    <input
                        className={styles.input}
                        type='text'
                        value={text}
                        onChange={handleOnChange}
                        onClick={handleClick}
                    />
                </div>
                {/* <button
                    type='submit'
                    className={
                        hidden ? styles.searchButtonHidden : styles.searchButton
                    }
                >
                    SEARCH
                </button> */}
            </form>
        </div>
    );
   
}