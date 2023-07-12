import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="pandielpanda">
        Pandiro Panda Panda
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing >
        Zorrila Zorra Zorra
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="perrielperro">
        Perrini Perro Perro 
      </TwitterFollowCard>
    </section>
  );
}
