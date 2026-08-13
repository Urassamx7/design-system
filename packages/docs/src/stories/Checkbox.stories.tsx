import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, type CheckboxProps, Text } from '@urassamx7/react'

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	args: {},
	decorators: [
		(story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
				>
					{story()}
					<Text size='sm'>Accept terms of use</Text>
				</Box>
			)
		},
	],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
