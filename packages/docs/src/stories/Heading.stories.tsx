import type { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@urassamx7/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom title',
	},
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story: 'Por padrão o heading será `h2`, mas podemos alterar com a propridade `as`.',
			},
		},
	},
}
