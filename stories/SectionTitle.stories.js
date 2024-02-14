import SectionTitle from "@/components/SectionTitle/SectionTitle"

export default {
  title: "Components/SectionTitle",
  component: SectionTitle
}

const Template = (args) => (
  <div className='bg:white flex min-h-[100px] items-center dark:bg-cDeepDark'>
    <SectionTitle {...args} />
  </div>
)

export const Base = Template.bind()
Base.args = {
  title: "Title",
  subTitle1: "My",
  subTitle2: "Test"
}
