import {useRef, useState } from "react";
import IsInputEmpty from "./components/IsInputEmpty";
import PostItem from "./components/PostItem";
import styles from "./scss/app.module.scss"

function App() {
  const [mainInputValue, setMainInputValue] = useState('');
  const [sizeInputValue, setSizeInputValue] = useState('');
  const [posts, setPosts] = useState([]);
  const [empty, isEmpty] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const mainInputRef = useRef();


  const onChangeSizeInput = (event) => {
    const result = event.target.value.replace(/\D/g, '');
    setSizeInputValue(result)
  }
  const onAddPost = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now(),
      text: mainInputValue,
      style: {fontSize: `${fontSize}px`},
    }
    if (mainInputValue !== '') {
      isEmpty(false)
      setPosts([...posts, item])
      console.log(posts)
      mainInputRef.current.value = '';
      setFontSize(sizeInputValue)
      setMainInputValue('')
    } else isEmpty(true)
  }
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.listUpper}>
          <h1>Todo App</h1>
          <form className={styles.form}>
            <input className={styles.mainInput} ref={mainInputRef} onChange={e => setMainInputValue(e.target.value)} type="text" placeholder="Введите текст..." />
            {empty ? <IsInputEmpty isEmpty={isEmpty}/> : <></>}
            <input onChange={onChangeSizeInput} className={styles.sizeInput} value={sizeInputValue} type="text" placeholder="Введите размер текста..."></input>
            <button className={styles.addButton} onClick={onAddPost} type="submit">Создать пост</button>
          </form>
        </div>
        <div className={styles.list}>
          {posts.map((post,index) => <PostItem fontSize={fontSize} key={post.id} number={index + 1} post={post} id={post.id}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
