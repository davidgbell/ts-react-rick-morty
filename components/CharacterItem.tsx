import Link from 'next/link';

interface PersonProps {
  name: string;
  species: string;
  image: string;
  id: number;
}

export const CharacterItem = ({ name, species, image, id }: PersonProps) => {
  return (
    <Link
      href={{
        pathname: '/person/[id]',
        query: { id: id },
      }}>
      <div style={{ background: 'cornflowerblue' }}>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{species}</p>
      </div>
    </Link>
  );
};
