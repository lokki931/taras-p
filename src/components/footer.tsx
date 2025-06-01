import { Container } from "./container";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-white">
      <Container>
        <Logo />
      </Container>
    </footer>
  );
};
