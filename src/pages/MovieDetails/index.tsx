import { Modal, Typography } from "antd";
import { Movie } from "../../types";
import { WrapperContainer, WrapperDetails } from "./styles";

const { Title, Paragraph } = Typography;

const MovieDetails = (props: {
  movie: Movie;
  modal: boolean;
  toggle: () => void;
}) => {
  return (
    <Modal
      centered
      visible={props.modal}
      // onOk={() => this.setModal2Visible(false)}
      onCancel={props.toggle}
      footer={null}
      width={1100}
    >
      <WrapperContainer>
        <img
          alt={props.movie.title}
          src={props.movie.imageUrl}
          className="imgCard"
        />
        <WrapperDetails>
          <Title level={2}>
            {props.movie.title} <span>({props.movie.releaseDate})</span>
          </Title>
          <Paragraph>
            <Title level={5} className="span">
              Rank:{" "}
            </Title>
            {props.movie.rank}
          </Paragraph>
          <Paragraph>
            <Title level={5} className="span">
              Type:{" "}
            </Title>
            {props.movie.type}
          </Paragraph>
          <div>
            <Title level={5} className="mb-0">
              Synopsis:
            </Title>
            <Paragraph className="synopsis">{props.movie.synopsis}</Paragraph>
          </div>
        </WrapperDetails>
      </WrapperContainer>
    </Modal>
  );
};

export default MovieDetails;
