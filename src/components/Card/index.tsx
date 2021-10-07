import React from "react";
import { StyledCard } from "./styles";

type CardProps = {
  children: React.ReactNode;
};

/**
 * A simple card component
 */
const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.displayName = "Card";
export default Card;
