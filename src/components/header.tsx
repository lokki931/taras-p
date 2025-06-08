import { Container } from "./container";
import { Navbar } from "./navbar";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";

export const Header = () => {
  return (
    <header className="py-4 border-b border-green-600">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <LanguageSwitcher />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
