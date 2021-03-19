import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardLink,
} from "reactstrap";

const PortfolioCard = ({ portfolio, children }) => (
  <Card className="portfolio-card">
    <CardImg src={portfolio.image} alt="Card image" />
    <CardImgOverlay>
      <CardHeader className="portfolio-card-header">
        {portfolio.stack}
      </CardHeader>
      <CardBody>
        {/* FIXME change to back ground and git image */}
        {/* <p className="portfolio-card-city">{portfolio.location}</p> */}
        <CardLink href={portfolio.githubWebsite}>
          <CardTitle className="portfolio-card-title">
            {portfolio.title}
          </CardTitle>
          <CardText className="portfolio-card-text">
            {portfolio.description}
          </CardText>
        </CardLink>
        {children}
      </CardBody>
    </CardImgOverlay>
  </Card>
);

export default PortfolioCard;
