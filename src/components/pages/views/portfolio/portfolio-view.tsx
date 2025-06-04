import { Container } from "@/components/container";

export function PortfolioView() {
  return (
    <Container>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">My Projects</h1>
        <p className="text-green-400 mb-6">
          Here you can find a selection of my recent work — real-world projects
          that demonstrate my skills in building responsive, modern web
          applications.
        </p>
        {/* portfolio cards */}
      </div>
    </Container>
  );
}
