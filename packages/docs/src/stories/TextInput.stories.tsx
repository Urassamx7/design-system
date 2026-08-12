import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, type TextInputProps } from '@urassamx7/react'

export default {
	title: 'Form/Text Input',
	component: TextInput,
	args: {},
	decorators: [
		(story) => {
			return (
				<Box
					as='label'
					css={{
						display: 'flex',
						flexDirection: 'column',
						gap: '$2',
					}}
				>
					<Text size='sm'>Email address</Text>
					{story()}
				</Box>
			)
		},
	],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: 'Type your name',
	},
}
export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'cal.com/',
	},
}

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
		placeholder: 'Type your name',
	},
}
