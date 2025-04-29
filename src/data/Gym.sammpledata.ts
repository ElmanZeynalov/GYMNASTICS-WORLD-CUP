import { MainNavProps, SecondaryNavProps } from '@/components/Navigation/Nav.types';
import { ApparatusItemProps } from '@/components/GymResult/ApparatusCarousel/Apparatus.types';
import { ResultRowData } from '@/components/GymResult/Results/Result.types';

export const sampleMainNav: MainNavProps['items'] = [
	{ label: 'Live', active: false, live: true, href: '/getting' },
	{ label: 'Startlist', active: false, href: '' },
	{ label: 'Schedule', active: false, href: '' },
	{ label: 'Results', active: true, href: '' },
	{ label: 'Medals', active: false, href: '' },
];

export const sampleSecondaryNav: SecondaryNavProps['items'] = [
	{ label: 'MAG' },
	{ label: 'WAG' },
	{ label: 'Qualification' },
	{ label: 'Final' },
	{ label: 'Apparatus', active: true },
	{ label: 'Team' },
	{ label: 'All-around' },
	{ label: 'Seniors' },
	{ label: 'Juniors' },
];

// Aygıt carousel için örnek veriler
export const sampleApparatus: ApparatusItemProps[] = [
	{ name: 'Floor', src: '/FX.png' },
	{ name: 'Pommel Horse', src: '/HB.png' },
	{ name: 'Rings', src: '/PB.png' },
	{ name: 'Vault', src: '/PH.png', active: true },
	{ name: 'Parallel Bars', src: '/Rings.png' },
	{ name: 'Horizontal Bar', src: '/VT.png' },
];

export const sampleResults: ResultRowData[] = [
	{
		rank: 1,
		country: 'RUS',
		bib: '212',
		name: 'Bonartsev Aleksandr',
		scores: [
			{ d: '5.633', e: '9.200', pen: '0.000', total: '14.833' },
			{ label: 'Score', total: '14.833', highlight: true },
		],
	},
	{
		rank: 2,
		country: 'EST',
		bib: '132',
		name: 'Liivak Miko',
		scores: [
			{ d: '5.500', e: '8.900', pen: '0.000', total: '14.400' },
			{ label: 'Score', total: '14.400' },
		],
	},
	{
		rank: 3,
		country: 'POR',
		bib: '624',
		name: 'Sousa Gymnast',
		scores: [
			{ d: '5.266', e: '8.950', pen: '0.000', total: '14.216' },
			{ label: 'Score', total: '14.216' },
		],
	},
];
