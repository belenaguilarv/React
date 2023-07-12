import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css'

export function App() {
  return (
  <section className='App'>
   <TwitterFollowCard isFollowing={true} userName="pandielpanda" name="Pandiro Panda Panda" />
   <TwitterFollowCard isFollowing={true}userName="zorrilazorra" name="Zorrila Zorra Zorra" />
   <TwitterFollowCard isFollowing={false}userName="perrielperro" name="Perrini Perro Perro" />
  </section>
  );
}

