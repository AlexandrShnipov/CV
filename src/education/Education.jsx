import s from './Education.module.css';
import {state} from '../state/state';
import {Fragment} from 'react';

export const Education = () => {
  return (
    <section className={s.education}>
      <h2>Education</h2>
      <div className={s.educationList}>
        {state.education.map((el, i) => (
          <div className={s.educationItem} key={i}>
            <div className={s.educationListItemTitle}>
              <h3>{el.places} </h3>
              <p>{el.position}</p>
            </div>
            <a className={s.educationListItemLink} href={el.site}>{el.site}</a>
            <data className={s.educationListItemData}><strong>date:</strong> {el.date}</data>
            {el.skills && <h4>Skills:</h4>}
            <ul className={s.educationListItemSkills}>              {
              el.skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))
            }
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
};