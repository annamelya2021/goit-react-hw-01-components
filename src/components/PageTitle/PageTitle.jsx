import css from './PageTitle.module.css';
import PropTypes from 'prop-types';

// import { PageTitle } from './PageTitle';
export const PageTitle = ({ text }) => {
    return <h1 className={css.title}>{ text}</h1>
};

PageTitle.propType ={
text: PropTypes.string.isRequired,
}