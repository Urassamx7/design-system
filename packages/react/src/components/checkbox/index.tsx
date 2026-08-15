import { Check } from 'phosphor-react'
import type { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
	extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxContainer {...props}>
			<CheckboxIndicator asChild>
				<Check size={16} weight='bold' />
			</CheckboxIndicator>
		</CheckboxContainer>
	)
}

Checkbox.displayName = 'Checkbox'