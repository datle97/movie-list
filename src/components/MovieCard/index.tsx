import { Link } from "react-router-dom";
import { Movie } from "../../types";
import { StyledCard, StyledMeta } from "./styles";

const MovieCard = (props: { movie: Movie; toggle: () => void }) => {
  return (
    <Link to={"/" + props.movie.rank} onClick={props.toggle}>
      <StyledCard
        hoverable
        cover={<img alt={props.movie.title} src={props.movie.imageUrl} />}
      >
        <StyledMeta
          title={props.movie.title}
          description={props.movie.synopsis}
        />
      </StyledCard>
    </Link>
  );
};

export default MovieCard;
