import { CharacterItem } from './CharacterItem';
import styles from '../styles/Home.module.css';

interface PeopleProps {
  people: string[];
}

export const CharacterList = ({ people }: PeopleProps) => {
  return (
    <div className={styles.grid}>
      {people &&
        people.map((person: any) => (
          <CharacterItem
            key={person.id}
            name={person.name}
            species={person.species}
            image={person.image}
            id={person.id}
          />
        ))}
    </div>
  );
};
