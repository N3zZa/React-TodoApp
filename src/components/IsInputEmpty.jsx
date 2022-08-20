import React from 'react';
import styles from "../scss/app.module.scss"

const IsInputEmpty = ({isEmpty}) => {

    const onClickbutton = (e)    => {
        e.preventDefault()
        isEmpty(false)
    }

  return (
      <div className={styles.emptyBlock}>
        <span>напишите что нибудь</span><button onClick={onClickbutton}>ok</button>
      </div>
  );
};

export default IsInputEmpty;
