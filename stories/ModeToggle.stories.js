import { ModeToggle } from "@/components/Navbar/ModeToggle"

export default {
  title: "Components/ModeToggle",
  component: ModeToggle,
  argTypes: { setTheme: { action: "handler" } }
}

const Template = (args) => (
  <div className='inline-block bg-primary p-4'>
    <ModeToggle {...args} />
  </div>
)

export const Base = Template.bind()
Base.args = {}
