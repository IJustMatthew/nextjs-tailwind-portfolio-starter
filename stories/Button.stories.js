import Button from "@/components/Button/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handler: { action: "handler" } }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind()
Primary.args = {
  text: "Test Button",
  icon: "forward_to_inbox"
}
