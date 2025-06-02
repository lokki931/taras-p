import { Container } from "./container";
import { Navbar } from "./navbar";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="py-4 border-b border-green-600">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
