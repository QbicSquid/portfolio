import TextTyper from './console/TextTyper'
import MeAscii from './console/MeAscii'

export const getStaticProps = () => {
  return {}
}

const About = () => {
  return (
    <div className="container flex-wrap">
      <p className="inline mr-3 text-gruvd-yellow2">~/about$ {'>'}</p>
      <TextTyper keydelay={50}>who am i</TextTyper>
      <br />
      <br />
      <TextTyper keydelay={20}>Shifan Mohamed</TextTyper>
      <br />
      <br />

      <TextTyper keydelay={20}>
        I am an enthusiastic Software Engineering undergraduate who loves to
        work in teams and loves software. I want to be in an environment that I
        could contribute to, and learn from.
      </TextTyper>
      <MeAscii/>
    </div>
  )
}

export default About
