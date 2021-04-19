import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CharacterList } from '../components/CharacterList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const INITIAL_URL = 'https://rickandmortyapi.com/api/character?page=1';
  const [characters, setCharacters] = useState<string[]>([]);
  const [page, setPage] = useState(
    'https://rickandmortyapi.com/api/character?page=1'
  );
  const [nextPage, setNextPage] = useState('');

  const getCharacters = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters([...characters, ...data.results]);
    setNextPage(data.info.next);
  };

  const handleClick = () => {
    setPage(nextPage);
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs with TypeScript</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {characters && <CharacterList people={characters} />}
        <button onClick={handleClick}>MORE</button>
      </main>
    </div>
  );
}
