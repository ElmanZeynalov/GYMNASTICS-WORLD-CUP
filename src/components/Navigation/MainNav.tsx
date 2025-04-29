import NavItem from './NavItem';
import { MainNavProps } from '@/components/Navigation/Nav.types';

export default function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex  border-b border-[#1a1635] w-max mb-4">
			{items.map((it) => (
				<NavItem
					key={it.label}
					label={it.label}
					active={it.active}
					hasLiveIndicator={it.live}
					href={it.href}
				/>
			))}
		</div>
	);
}
