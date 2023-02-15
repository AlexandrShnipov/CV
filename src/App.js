import './reset.css';
import './index.css';
import s from './App.module.css';
import {state} from './state/state';
import {Contacts} from './contacts/Contacts';
import {Experience} from './experience/Experience';
import {Education} from './education/Education';

const App = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.photoWrap}>
          <img className={s.photo} src={state.about.photo} alt="my photo"/>
        </div>
        <div className={s.headerContent}>
          <h1 className={s.mainTitle}>
            <p className={s.mainTitleName}>{state.about.name} {state.about.surname}</p>
            <p className={s.mainTitleProfession}>{state.about.profession}</p>
          </h1>
          <Contacts/>
        </div>

      </header>
      <main className={s.main}>
        <div className={s.mainContainer}>
          <div className={s.mainContentLeft}>
            <div className={s.location}>
              <img src={state.location.icon} alt="icon location"/>
              <span>{state.location.country},&nbsp; </span>
              <span> {state.location.city}</span>
            </div>
            <div>
              <h2>Summary</h2>
              <p className={s.summary}>{state.summary}</p>
            </div>

            <div className={s.skillsBlock}>
              <h2>Skills</h2>
              <ul className={s.skillsList}>
                {state.skills.map((el, i) => (
                  <li className={s.skillsItem} key={i}>{el}</li>
                ))}
              </ul>
            </div>
            <div className={s.porfolioBlock}>
              <img className={s.QrCode} src={state.portfolio.qrCode} alt={'link for portfolio'}/>
              <a className={s.porfolioLink} href={state.portfolio.link}>
                open my portfolio
                <img src={state.portfolio.finger} alt="link for opened portfolio"/>
              </a>
            </div>
          </div>
          <div className={s.mainContentRight}>
            <Experience/>
            <Education/>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
