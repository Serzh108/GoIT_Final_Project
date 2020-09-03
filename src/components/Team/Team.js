import React from 'react';
import style from './team.module.css';
function Team() {
  return (
    <section className={style.ourTeam}>
      <h1>Delete this h1</h1>
      <ul className={style.ourTeamList}>
        <li classname={style.ourTeamItem}>
          <ul>
            <li className={style.Img}></li>
            <li className={style.position}></li>
            <li className={style.socialLink}>
              <ul className={style.socialLinkWrapper}>
                <li className={style.link}></li>
                <li className={style.link}></li>
                <li className={style.link}></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
export default Team;
