import { UpdatePosts } from 'app/components/posts'
import Profile from 'app/components/profile'
import Skills from './components/skills'

export const metadata = {
  title: 'RishiJS Home',
  description: 'About me.',
}


export default function Page() {
  return (
    <section className="mb-12">
      <Profile/>
      <div className="my-8">
        <UpdatePosts />
      </div>
      <p className="mb-4">
        {` Summary, Resume download`}
      </p>
      <p className="mb-4">
        {`Education: Rutgers University, New Brunswick
         Bachelor of Science (B.S.) Major in Computer Science
         GPA 3.44 January 2024

        Data Management & Data Science, Artificial Intelligence, 
        Computer Algorithms, Data Structures, Computer Architecture, 
        Systems Programming, Imaging & Multimedia, Calculus,
        Linear Algebra, Discrete Math, Numerical Analysis`}
      </p>
      <p className="mb-4">
        {`Python, Javascript, Java, C/C++/C#, GDScript, HTML/CSS, JDBC,
          MySQL Tools/Frameworks: Three.js, React.js, Flask, Git, 
          Unreal Engine, Unity, Godot, Jupyter Notebooks,
          Pandas, NumPy, Matplotlib, Pygame`}
      </p>
      <p className="mb-4">
        {`New Jersey - rishi.rjsd@gmail.com
        Contact Button/Info`}
      </p>
    </section>
  )
}
