import { GetServerSideProps } from 'next';
import styles from '../../styles/Home.module.css';

interface PersonProps {
  person: {
    name: string;
    origin: string;
    image: string;
  };
}

const PersonPage = ({ person }: PersonProps) => {
  return (
    <div className={styles.container}>
      <h2>{person.name}</h2>
      <p>Origin: {person.origin}</p>
      <img src={person.image} alt={person.name} />
    </div>
  );
};
export default PersonPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const personData = await res.json();
  return {
    props: {
      person: {
        name: personData.name,
        origin: personData.origin.name,
        image: personData.image,
      },
    },
  };
};
