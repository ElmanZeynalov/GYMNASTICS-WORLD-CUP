export interface MainNavProps {
	items: { label: string; active?: boolean; live?: boolean; href?: string }[];
}

export interface NavItemProps {
	label: string;
	active?: boolean;
	hasLiveIndicator?: boolean;
	href?: string;
}

export interface SecondaryNavProps {
	items: { label: string; active?: boolean }[];
}

export interface SecondaryNavItemProps {
	label: string;
	active?: boolean;
}
