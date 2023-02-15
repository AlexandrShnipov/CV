import s from './Experience.module.css';
import {state} from '../state/state';
import {Fragment} from 'react';

export const Experience = () => {
  return (
    <section className={s.experience}>
      <h2>Experience</h2>
      <div className={s.experienceWrap}>
        <div className={s.frontendBlock}>
          <div className={s.frontendBlockTitle}>
            <h3>{state.experience.frontend.position}</h3>
            <h4>{state.experience.frontend.places}</h4>
          </div>
          <data><strong>date: </strong> {state.experience.frontend.date}</data>
          <ul className={s.frontentBlockWorks}>
            {state.experience.frontend.work.map((el,i) => (<li key={i}>{el}</li>))}
          </ul>
        </div>
        <div className={s.customsBlock}>
          <h3>{state.experience.customs.position}</h3>
          {state.experience.customs.positionsArray.map((el,i) => (
            <div className={s.customsBlockItem} key={i}>
              <h4>{el.subPosition}</h4>
              <p>{el.places}</p>
            </div>
          ))}
          <data><strong>date: </strong>{state.experience.customs.date}</data>
          <ul className={s.customsBlockWorks}>
            {state.experience.customs.work.map((el,i) => (<li key={i}>{el}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )
}