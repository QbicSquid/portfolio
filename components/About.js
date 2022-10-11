import { useContext, useEffect } from 'react'

import TextTyper from './console/TextTyper'
import MeAscii from './console/MeAscii'
import Selector from './console/Selector'
import SelectionContext from './context/SelectionContext'
import { selectionOpt } from './console/Selector'

export const getStaticProps = () => {
  return {}
}

// TODO: turn all the <br/>'s into mt's
const About = () => {
  const selectionContext = useContext(SelectionContext)

  return (
    <div className="container flex">
      <div className="container">
        <p className="inline mr-3 text-gruvd-yellow2">~/about$ {'>'}</p>
        <TextTyper keydelay={50}>who am i</TextTyper>
        <br />
        <br />
        <TextTyper keydelay={20}>Shifan Mohamed</TextTyper>
        <br />

        <TextTyper keydelay={20}>
          I am an enthusiastic Software Engineering undergraduate who loves to
          work in teams and loves software. I want to be in an environment that
          I could contribute to, and learn from.
        </TextTyper>
        <br />
        <br />
        <br />
        <br />
        <p className="inline text-gruvd-yellow2">~/about$ {'>'} ls</p>
        <br />
        <p className="inline text-gruvd-yellow2">Select An Option:</p>
        <br />
        <br />
        <Selector />
        <br />
        <br />
      <p className={'inline mr-3 text-gruvd-yellow2 ' + (!(selectionContext.enter) && ' hidden')}>~/about$ {'>'}</p>
      {selectionContext.enter && <TextTyper keydelay={70}>{'clear; cd ~/' + selectionOpt[selectionContext.selection].name}</TextTyper> }
      </div>
      <div className="flex-wrap">
        <MeAscii />
        <p className="mt-2 text-center my text-gruvd-yellow2">
          Potrait [ █████ ] 100% Rendered
        </p>
      </div>
    </div>
  )
}

export default About
