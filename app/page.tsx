import { UpdatePosts } from 'app/components/posts'
import Profile from 'app/components/profile'
import Events from './components/events'
import Sequence from './components/sequence'
import { UpdatePostsHighlights } from './components/postHighlights'
import Github from './components/githubProfile'

export const metadata = {
  title: 'RishiJS Home',
  description: 'About me.',
}


export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-4">
      <Profile/>
      <UpdatePostsHighlights />
      <Sequence/>
    </section>
  )
}

 /*
Python, Javascript, Java, C/C++/C#, GDScript, HTML/CSS, JDBC,
MySQL Tools/Frameworks: Three.js, React.js, Flask, Git, 
Unreal Engine, Unity, Godot, Jupyter Notebooks,
Pandas, NumPy, Matplotlib, Pygame
*/


/*`Education: Rutgers University, New Brunswick
Bachelor of Science (B.S.) Major in Computer Science
GPA 3.44 January 2024

Data Management & Data Science, Artificial Intelligence, 
Computer Algorithms, Data Structures, Computer Architecture, 
Systems Programming, Imaging & Multimedia, Calculus,
Linear Algebra, Discrete Math, Numerical Analysis`
*/
