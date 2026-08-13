import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, type MultiStepProps } from '@urassamx7/react'

export default {
	title: 'Form/Multi Step',
	component: MultiStep,
	args: {
		steps: 4,
		currentStep: 1,
	},
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
					{story()}
				</Box>
			)
		},
	],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
	args: {},
}

export const Full: StoryObj<MultiStepProps> = {
	args: {
		currentStep: 4,
	},
}
