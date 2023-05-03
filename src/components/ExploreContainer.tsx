import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Ir a<a rel="noopener noreferrer" href="/fotos"> Fotos</a></p>
    </div>
  );
};

export default ExploreContainer;
