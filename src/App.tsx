import { AccentColorExample } from './components/AccentColorExample'
import { AnimationExample } from './components/AnimationExample'
import { CaretAndOutlineExample } from './components/CaretAndOutlineExample'
import { DividerExample } from './components/DividerExample'
import { GradientStuff } from './components/GradientStuff'
import { SROnlyExample } from './components/SROnlyExample'
import { ScrollSnapExample } from './components/ScrollSnapExample'
import { SpaceBetweenExample } from './components/SpaceBetweenExample'

function App() {


  return (
    <div className='bg-purple-500 w-screen h-screen '>
      <div className='container mx-auto'>
        <DividerExample />
        <ScrollSnapExample />
        <SROnlyExample />
        <AccentColorExample />
        <CaretAndOutlineExample />
        <GradientStuff />
        <AnimationExample />
        <SpaceBetweenExample />
      </div>
    </div>
  )
}

export default App
